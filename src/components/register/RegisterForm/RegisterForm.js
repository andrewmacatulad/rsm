import React, { Component } from "react";
import { Form, Field } from "react-final-form";

import * as Semantic from "semantic-ui-react";
import TextInput from "../../../common/TextInput";
// import SelectInput from "./common/SelectInput";
// import RadioInput from "./common/RadioInput";
// import TextArea from "./common/TextArea";
// import CheckInput from "./common/CheckInput";

const { Form: SemanticForm, Button, Segment } = Semantic;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const onlyLetters = value =>
  value.replace(/^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/, "");

const verifyEmail = async values => {
  await sleep(400);
  if (
    ~[
      "plue@plue.com",
      "tob@tob.com",
      "pluebot@pluebot.com",
      "tobeulp@tobeulp.com"
    ].indexOf(values.email && values.email.toLowerCase())
  ) {
    return { email: "Email already taken!" };
  }
};

class RegisterForm extends Component {
  state = { selected: [] };
  render() {
    return (
      <Segment>
        <Form
          onSubmit={onSubmit}
          initialValues={{ stooge: "larry", employed: false }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.fullName) {
              errors.fullName = "Required";
            }

            // if (!values.age) {
            //   errors.age = "Required";
            const re = /^([^0-9]*)$/;
            if (!re.test(values.fullName)) {
              errors.fullName = "No numbers";
            }
            // } else if (values.age < 18) {
            //   errors.age = "No kids allowed";
            // }
            return Object.keys(errors).length ? errors : verifyEmail(values);
          }}
          render={({
            handleSubmit,
            reset,
            submitting,
            pristine,
            values,
            invalid
          }) => (
            <SemanticForm
              style={{ width: 400, margin: "auto" }}
              onSubmit={handleSubmit}
            >
              <div>
                <label>Email</label>
                <Field
                  name="email"
                  component={TextInput}
                  type="email"
                  placeholder="Email"
                  parse={value => value && value.toUpperCase()}
                  format={value => value && value.toLowerCase()}
                />
              </div>
              <div>
                <label>Full Name</label>
                <Field
                  name="fullName"
                  component={TextInput}
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              {/* <div>
                <label>Notes</label>
                <Field name="notes" component={TextArea} placeholder="Notes" />
              </div> */}
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
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </SemanticForm>
          )}
        />
      </Segment>
    );
  }
}

export default RegisterForm;
