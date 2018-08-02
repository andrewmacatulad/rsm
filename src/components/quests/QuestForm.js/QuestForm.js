import React from "react";
import { Field } from "react-final-form";
import Wizard from "../../../common/Wizard";
import * as Semantic from "semantic-ui-react";

import TextInput from "../../../common/TextInput";
import SelectInput from "../../../common/SelectInput";
import TextArea from "../../../common/TextArea";

const { Segment, Header, Label } = Semantic;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

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
  { key: "monthly", text: "Monthly", value: "monthly" }
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

const QuestForm = () => (
  <Segment>
    <h1>Add quest</h1>
    <Wizard
      initialValues={{ employed: true, stooge: "larry", questType: "daily" }}
      onSubmit={onSubmit}
    >
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
          <Field name="questType" options={questType} component={SelectInput} />
          <Error name="questType" />
        </div>
      </Wizard.Page>
      <Wizard.Page>
        <div>
          <label>Quest Name</label>
          <Field
            name="questName"
            component={TextInput}
            type="text"
            placeholder="Quest Name"
            validate={required}
          />
          <Error name="questName" />
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

export default QuestForm;
