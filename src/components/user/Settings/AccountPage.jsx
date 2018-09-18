import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form, Field } from "react-final-form";
import moment from "moment";
import createDecorator from "final-form-calculate";

import * as Semantic from "semantic-ui-react";

import SelectInput from "../../../common/SelectInput";
import TextInput from "../../../common/TextInput";
import TextArea from "../../../common/TextArea";
import PlaceInput from "../../../common/PlaceInput";
import LoadingComponent from "../../../layout/LoadingComponent";
import { editAccountProfile } from "../Profile/profileActions";

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

const emailCheck = value => {
  // if (value === undefined) {
  //   return "Required";
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return "Invalid email address";
  }
};
// value
//   ? !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
//   : "Invalid email address";

let daysIn = [];
const calculator = createDecorator(
  {
    field: "month", // when minimum changes...
    updates: {
      // ...update maximum to the result of this function
      day: (monthValue, allValues) => {
        let dayInMonth = moment(
          `${allValues.year || 2001}-${monthValue}`,
          "YYYY-MM"
        ).daysInMonth();

        let allMonth = [];
        for (let x = 0; x < dayInMonth; x++) {
          allMonth.push(dayInMonth - x);
        }

        daysIn = allMonth.sort((a, b) => a - b).map(x => {
          return { key: x, text: x, value: x };
        });
      }
    }
  }
  // {
  //   field: "year",
  //   updates: {
  //     day: (yearValue, allValues) => {
  //       if (moment([yearValue]).isLeapYear() && allValues.month === 2) {
  //         let dayInMonth = moment(
  //           `${yearValue || 2001}-${allValues.month || 1}`,
  //           "YYYY-MM"
  //         ).daysInMonth();

  //         let allMonth = [];
  //         for (let x = 0; x < dayInMonth; x++) {
  //           allMonth.push(dayInMonth - x);
  //         }

  //         // daysIn = allMonth.map(x => {
  //         //   return { key: x, text: x, value: x };
  //         // });
  //       }
  //     }
  //   }
  // }
);

class AccountPage extends Component {
  onSubmit = async values => {
    // const { partyTitle, partyDesc } = values;
    // this.props.createParty(partyTitle, partyDesc);
    // this.props.closeModal();
    // this.props.history.push("/party");

    await this.props.editAccountProfile(values);
    this.props.history.push("/settings");
  };

  render() {
    const { profile } = this.props;
    const gender = [
      { key: "Male", value: "male", text: "Male" },
      { key: "Female", value: "female", text: "Female" },
      { key: "Custom", value: "custom", text: "Custom" }
    ];
    console.log(moment("2018-9", "YYYY-MM").daysInMonth());

    let maxOffset = 115;
    let thisYear = new Date().getFullYear();
    let allYears = [];
    for (let x = 0; x <= maxOffset; x++) {
      allYears.push(thisYear - x);
    }

    const yearList = allYears.map(x => {
      return { key: x, text: x, value: x.toString() };
    });

    const monthList = [
      { key: "January", value: "01", text: "January" },
      { key: "February", value: "02", text: "February" },
      { key: "March", value: "03", text: "March" },
      { key: "April", value: "04", text: "April" },
      { key: "May", value: "05", text: "May" },
      { key: "June", value: "06", text: "June" },
      { key: "July", value: "07", text: "July" },
      { key: "August", value: "08", text: "August" },
      { key: "September", value: "09", text: "September" },
      { key: "October", value: "10", text: "October" },
      { key: "November", value: "11", text: "November" },
      { key: "December", value: "12", text: "December" }
    ];

    if (!profile.address) {
      return <LoadingComponent />;
    }
    console.log(profile.gender);
    return (
      <Segment>
        <Form
          onSubmit={this.onSubmit}
          initialValues={{
            email: profile.email,
            name: profile.name,
            street: profile.address.street,
            city: profile.address.city,
            state: profile.address.state,
            zip: profile.address.zip,
            gender: profile.gender,
            month: profile.birthDate.slice(0, 2),
            // day: profile.birthDate.slice(4, 6),
            year: profile.birthYear
          }}
          decorators={[calculator]}
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
                <label>Email</label>
                <Field
                  name="email"
                  component={TextInput}
                  type="email"
                  placeholder="Email"
                  disabled
                  validate={emailCheck}
                />
                <Error name="Name" />
              </div>
              <div>
                <label>Name</label>
                <Field
                  name="name"
                  component={TextInput}
                  type="text"
                  placeholder="Name"
                  validate={required}
                />
                <Error name="name" />
              </div>
              <label>Address</label>
              <SemanticForm.Group>
                <Field
                  fluid
                  name="street"
                  component={TextInput}
                  type="text"
                  placeholder="Street"
                  width={6}
                  validate={required}
                />
                <Field
                  fluid
                  name="city"
                  component={PlaceInput}
                  options={{ types: ["(cities)"] }}
                  placeholder="City"
                  width={6}
                />
                <Field
                  fluid
                  name="state"
                  component={TextInput}
                  type="text"
                  placeholder="State"
                  width={2}
                  validate={required}
                />
                <Field
                  fluid
                  name="zip"
                  component={TextInput}
                  type="text"
                  placeholder="Zip"
                  width={2}
                  validate={required}
                />
              </SemanticForm.Group>
              <div>
                <label>Gender</label>
                <Field name="gender" options={gender} component={SelectInput} />
              </div>
              <div>
                <label>Date</label>

                <Field
                  placeholder="Day"
                  search
                  options={daysIn}
                  name="day"
                  component={SelectInput}
                />
                <Field
                  placeholder="Month"
                  search
                  name="month"
                  options={monthList}
                  component={SelectInput}
                />
                <Field
                  placeholder="Year"
                  search
                  name="year"
                  options={yearList}
                  component={SelectInput}
                />
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
    { editAccountProfile }
  )(AccountPage)
);
