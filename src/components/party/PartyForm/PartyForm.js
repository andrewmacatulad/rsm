import React, { Component } from "react";
import { Field, Form } from "react-final-form";
import * as Semantic from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import TextInput from "../../../common/TextInput";
import TextArea from "../../../common/TextArea";
import { closeModal } from "../../modals/modalActions";

import { createParty } from "../partyAction";

const { Form: SemanticForm, Segment, Button } = Semantic;

const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
);

const required = value => (value ? undefined : "Required");

class PartyForm extends Component {
  onSubmit = async values => {
    const { partyTitle, partyDesc } = values;
    this.props.createParty(partyTitle, partyDesc);
    this.props.closeModal();
    this.props.history.push("/party");
  };
  render() {
    return (
      <Segment>
        <Form
          onSubmit={this.onSubmit}
          render={({
            handleSubmit,
            reset,
            submitting,
            pristine,
            values,
            invalid
          }) => (
            <SemanticForm onSubmit={handleSubmit}>
              <div>
                <label>Party Title</label>
                <Field
                  name="partyTitle"
                  component={TextInput}
                  type="text"
                  placeholder="Party Title"
                  validate={required}
                />
                <Error name="partyTitle" />
              </div>
              <div>
                <label>Party Description</label>
                <Field
                  name="partyDesc"
                  component={TextArea}
                  placeholder="Please enter the description of the party"
                />
                <Error name="partyDesc" />
              </div>
              <div className="buttons">
                <Button
                  positive
                  type="submit"
                  disabled={submitting || pristine || invalid}
                >
                  Submit
                </Button>
                <Button
                  negative
                  type="button"
                  onClick={reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </Button>
              </div>
            </SemanticForm>
          )}
        />
      </Segment>
    );
  }
}

export default withRouter(
  connect(
    null,
    { createParty, closeModal }
  )(PartyForm)
);
