import "rc-steps/assets/index.css";
import "rc-steps/assets/iconfont.css";
import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-final-form";
import Steps from "rc-steps";
import * as Semantic from "semantic-ui-react";

const { Form: SemanticForm, Button, Icon, Label } = Semantic;

export default class Wizard extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };
  static Page = ({ children }) => children;

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues || {}
    };
  }
  next = values =>
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values
    }));

  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }));

  /**
   * NOTE: Both validate and handleSubmit switching are implemented
   * here because 🏁 Redux Final Form does not accept changes to those
   * functions once the form has been defined.
   */

  validate = values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = values => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values);
    } else {
      this.next(values);
    }
  };

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;
    return (
      <Form
        initialValues={values}
        validate={this.validate}
        onSubmit={this.handleSubmit}
      >
        {({ handleSubmit, submitting, values }) => (
          <SemanticForm onSubmit={handleSubmit}>
            <Steps current={page}>
              <Steps.Step title="Quest Type" icon={<Icon name="payment" />} />
              <Steps.Step title="Quest Objective" />
            </Steps>
            {activePage}
            <div className="buttons">
              {page > 0 && (
                <Button type="button" onClick={this.previous}>
                  « Previous
                </Button>
              )}
              {!isLastPage && (
                <div>
                  <Button positive type="submit">
                    Next »
                  </Button>
                </div>
              )}
              {isLastPage && (
                <Button positive type="submit" disabled={submitting}>
                  Submit
                </Button>
              )}
            </div>
          </SemanticForm>
        )}
      </Form>
    );
  }
}
