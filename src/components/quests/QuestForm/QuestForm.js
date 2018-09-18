import React, { Component } from "react";
import { Field } from "react-final-form";
import Wizard from "../../../common/Wizard";
import * as Semantic from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import TextInput from "../../../common/TextInput";
import SelectInput from "../../../common/SelectInput";
import TextArea from "../../../common/TextArea";

import { createQuests } from "../questAction";

const { Segment } = Semantic;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
);

const questType = [
  { key: "daily", text: "Daily", value: "daily" },
  { key: "weekly", text: "Weekly", value: "weekly" },
  { key: "monthly", text: "Monthly", value: "monthly" },
  { key: "yearly", text: "Yearly", value: "yearly" }
];

// const foods = [
//   { key: "chicken", text: "🐓 Chicken", value: "chicken" },
//   { key: "ham", text: "🐷 Ham", value: "ham" },
//   { key: "mushrooms", text: "🍄 Mushrooms", value: "mushrooms" },
//   { key: "cheese", text: "🧀 Cheese", value: "cheese" },
//   { key: "tuna", text: "🐟 Tuna", value: "tuna" },
//   { key: "pineapple", text: "🍍 Pineapple", value: "pineapple" }
// ];

const required = value => (value ? undefined : "Required");

class QuestForm extends Component {
  onSubmit = async values => {
    this.props.createQuests(
      values.questTitle,
      values.questObjective,
      values.questType
    );
    this.props.history.push("/quests");
  };
  render() {
    return (
      <Segment>
        <h1>Add quest</h1>
        <Wizard initialValues={{ questType: "daily" }} onSubmit={this.onSubmit}>
          <Wizard.Page
            validate={values => {
              const errors = {};
              if (!values.questType) {
                errors.questType = "Required";
              }
              return errors;
            }}
          >
            <div>
              <label>Type of Quest</label>
              <Field
                name="questType"
                options={questType}
                component={SelectInput}
              />
              <Error name="questType" />
            </div>
          </Wizard.Page>
          <Wizard.Page>
            <div>
              <label>Quest Title</label>
              <Field
                name="questTitle"
                component={TextInput}
                type="text"
                placeholder="Quest Title"
                validate={required}
              />
              <Error name="questTitle" />
            </div>
            <div>
              <label>Quest Objective</label>
              <Field
                name="questObjective"
                component={TextArea}
                placeholder="Please enter the objective of the quest"
              />
              <Error name="questObjective" />
            </div>
          </Wizard.Page>
        </Wizard>
      </Segment>
    );
  }
}

export default withRouter(
  connect(
    null,
    { createQuests }
  )(QuestForm)
);
