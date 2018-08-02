// import React, { Component } from "react";
// import { Form, Field } from "react-final-form";

// import \* as Semantic from "semantic-ui-react";
// import TextInput from "../../../common/TextInput";
// import Wizard from '../../../common/Wizard'
// // import SelectInput from "./common/SelectInput";
// // import RadioInput from "./common/RadioInput";
// // import TextArea from "./common/TextArea";
// // import CheckInput from "./common/CheckInput";

// const { Form: SemanticForm, Button, Segment } = Semantic;

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// const onSubmit = async values => {
// await sleep(300);
// window.alert(JSON.stringify(values, 0, 2));
// };

// const onlyLetters = value =>
// value.replace(/^[ñA-Za-z _]_[ñA-Za-z][ña-za-z _]_$/, "");

// const verifyEmail = async values => {
// await sleep(400);
// if (
// ~[
// "plue@plue.com",
// "tob@tob.com",
// "pluebot@pluebot.com",
// "tobeulp@tobeulp.com"
// ].indexOf(values.email && values.email.toLowerCase())
// ) {
// return { email: "Email already taken!" };
// }
// };

// class QuestForm extends Component {
// state = { selected: [] };
// render() {
// return (
// <Segment>
// <Form
// onSubmit={onSubmit}
// initialValues={{ stooge: "larry", employed: false }}
// validate={values => {
// const errors = {};
// if (!values.email) {
// errors.email = "Required";
// } else if (
// !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
// ) {
// errors.email = "Invalid email address";
// }

// if (!values.fullName) {
// errors.fullName = "Required";
// }

// // if (!values.age) {
// // errors.age = "Required";
// const re = /^([^0-9]_)$/;
// if (!re.test(values.fullName)) {
// errors.fullName = "No numbers";
// }
// // } else if (values.age < 18) {
// // errors.age = "No kids allowed";
// // }
// return Object.keys(errors).length ? errors : verifyEmail(values);
// }}
// render={({
// handleSubmit,
// reset,
// submitting,
// pristine,
// values,
// invalid
// }) => (
// <SemanticForm
// style={{ width: 400, margin: "auto" }}
// onSubmit={handleSubmit}
// >
// <div>
// <label>Email</label>
// <Field
// name="email"
// component={TextInput}
// type="email"
// placeholder="Email"
// parse={value => value && value.toUpperCase()}
// format={value => value && value.toLowerCase()}
// />
// </div>
// <div>
// <label>Full Name</label>
// <Field
// name="fullName"
// component={TextInput}
// type="text"
// placeholder="Full Name"
// />
// </div>
// {/_ <div>
// <label>Notes</label>
// <Field name="notes" component={TextArea} placeholder="Notes" />
// </div> \*/}
// <div className="buttons">
// <Button
// positive
// type="submit"
// disabled={submitting || pristine || invalid}
// >
// Submit
// </Button>
// <Button
// negative
// type="button"
// onClick={reset}
// disabled={submitting || pristine}
// >
// Reset
// </Button>
// </div>
// <pre>{JSON.stringify(values, 0, 2)}</pre>
// </SemanticForm>
// )}
// />
// </Segment>
// );
// }
// }

// export default QuestForm;

import React from "react";
import { Field } from "react-final-form";
import Wizard from "../../../common/Wizard";
import \* as Semantic from "semantic-ui-react";

import TextInput from "../../../common/TextInput";
import SelectInput from "../../../common/SelectInput";
import RadioInput from "../../../common/RadioInput";
import TextArea from "../../../common/TextArea";
import CheckInput from "../../../common/CheckInput";

const { Form: SemanticForm, Segment } = Semantic;
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

const colors = [
{ key: "red", text: "❤️ Red", value: "#ff0000" },
{ key: "green", text: "💚 Green", value: "#00ff00" },
{ key: "blue", text: "💙 Blue", value: "#0000ff" }
];

const foods = [
{ key: "chicken", text: "🐓 Chicken", value: "chicken" },
{ key: "ham", text: "🐷 Ham", value: "ham" },
{ key: "mushrooms", text: "🍄 Mushrooms", value: "mushrooms" },
{ key: "cheese", text: "🧀 Cheese", value: "cheese" },
{ key: "tuna", text: "🐟 Tuna", value: "tuna" },
{ key: "pineapple", text: "🍍 Pineapple", value: "pineapple" }
];

const required = value => (value ? undefined : "Required");

const QuestForm = () => (
<Segment>
<h1>🏁 React Final Form Example</h1>
<h2>Wizard Form</h2>
<a href="https://github.com/erikras/react-final-form#-react-final-form">
Read Docs
</a>
<p>
Notice the mixture of field-level and record-level (or <em>page-level</em>{" "}
in this case) validation.
</p>
<Wizard
initialValues={{ employed: true, stooge: "larry" }}
onSubmit={onSubmit} >
<Wizard.Page>
<div>
<label>First Name</label>
<Field
            name="firstName"
            component={TextInput}
            type="text"
            placeholder="First Name"
            validate={required}
          />
<Error name="firstName" />
</div>
<div>
<label>Last Name</label>
<Field
            name="lastName"
            component={TextInput}
            type="text"
            placeholder="Last Name"
            validate={required}
          />
<Error name="lastName" />
</div>
</Wizard.Page>
<Wizard.Page
validate={values => {
const errors = {};
if (!values.email) {
errors.email = "Required";
}
if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
errors.email = "Invalid email address";
}
if (!values.favoriteColor) {
errors.favoriteColor = "Required";
}
return errors;
}} >
<div>
<label>Email</label>
<Field
            name="email"
            component={TextInput}
            type="email"
            placeholder="Email"
          />
<Error name="email" />
</div>
<div>
<label>Favorite Color</label>
<Field
            name="favoriteColor"
            options={colors}
            component={SelectInput}
          />
<Error name="favoriteColor" />
</div>
</Wizard.Page>
<Wizard.Page
validate={values => {
const errors = {};
if (!values.toppings) {
errors.toppings = "Required";
} else if (values.toppings.length < 2) {
errors.toppings = "Choose more";
}
return errors;
}} >
<div>
<label>Employed?</label>
<Field name="employed" component={CheckInput} type="checkbox" />
</div>
<div>
<label>Toppings</label>
<Field
            name="toppings"
            options={foods}
            component={SelectInput}
            multiple
          />
{/_ <Field name="toppings" component="select" multiple>
<option value="ham">🐷 Ham</option>
<option value="mushrooms">🍄 Mushrooms</option>
<option value="cheese">🧀 Cheese</option>
<option value="chicken">🐓 Chicken</option>
<option value="pineapple">🍍 Pinapple</option>
</Field> _/}
<Error name="toppings" />
</div>
</Wizard.Page>
<Wizard.Page
validate={values => {
const errors = {};
if (!values.notes) {
errors.notes = "Required";
}
return errors;
}} >
<div>
<label>Best Stooge?</label>
<div>
<label>
<SemanticForm.Group>
<Field
                  name="stooge"
                  component={RadioInput}
                  type="radio"
                  value="larry"
                  label="Larry"
                />
<Field
                  name="stooge"
                  component={RadioInput}
                  type="radio"
                  value="moe"
                  label="Moe"
                />
<Field
                  name="stooge"
                  component={RadioInput}
                  type="radio"
                  value="curly"
                  label="Curly"
                />
</SemanticForm.Group>
</label>
</div>
</div>
<div>
<label>Notes</label>
<Field name="notes" component={TextArea} placeholder="Notes" />
<Error name="notes" />
</div>
</Wizard.Page>
</Wizard>
</Segment>
);

export default QuestForm;
