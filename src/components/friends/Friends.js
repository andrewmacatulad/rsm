// import React, { Component } from "react";
// import { Form, Field } from "react-final-form";

// import * as Semantic from "semantic-ui-react";
// import TextInput from "../../common/TextInput";
// // import RadioInput from "./common/RadioInput";
// // import TextArea from "./common/TextArea";
// // import CheckInput from "./common/CheckInput";
// import SelectInput from "../../common/SelectInput";

// const { Form: SemanticForm, Button, Segment } = Semantic;

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// const onSubmit = async values => {
//   await sleep(300);
//   window.alert(JSON.stringify(values, 0, 2));
// };

// const options = [
//   { key: "angular", text: "Angular", value: "angular" },
//   { key: "css", text: "CSS", value: "css" },
//   { key: "design", text: "Graphic Design", value: "design" },
//   { key: "ember", text: "Ember", value: "ember" },
//   { key: "html", text: "HTML", value: "html" },
//   { key: "ia", text: "Information Architecture", value: "ia" },
//   { key: "javascript", text: "Javascript", value: "javascript" },
//   { key: "mech", text: "Mechanical Engineering", value: "mech" },
//   { key: "meteor", text: "Meteor", value: "meteor" },
//   { key: "node", text: "NodeJS", value: "node" },
//   { key: "plumbing", text: "Plumbing", value: "plumbing" },
//   { key: "python", text: "Python", value: "python" },
//   { key: "rails", text: "Rails", value: "rails" },
//   { key: "react", text: "React", value: "react" },
//   { key: "repair", text: "Kitchen Repair", value: "repair" },
//   { key: "ruby", text: "Ruby", value: "ruby" },
//   { key: "ui", text: "UI Design", value: "ui" },
//   { key: "ux", text: "User Experience", value: "ux" }
// ];

// const colors = [
//   { key: "red", text: "❤️ Red", value: "#ff0000" },
//   { key: "green", text: "💚 Green", value: "#00ff00" },
//   { key: "blue", text: "💙 Blue", value: "#0000ff" }
// ];

// const foods = [
//   { key: "chicken", text: "🐓 Chicken", value: "chicken" },
//   { key: "ham", text: "🐷 Ham", value: "ham" },
//   { key: "mushrooms", text: "🍄 Mushrooms", value: "mushrooms" },
//   { key: "cheese", text: "🧀 Cheese", value: "cheese" },
//   { key: "tuna", text: "🐟 Tuna", value: "tuna" },
//   { key: "pineapple", text: "🍍 Pineapple", value: "pineapple" }
// ];

// const verifyFirstName = async values => {
//   await sleep(400);
//   if (
//     ~["john", "paul", "george", "ringo"].indexOf(
//       values.firstName && values.firstName.toLowerCase()
//     )
//   ) {
//     return { firstName: "Username taken!" };
//   }
// };

// class FinalForm extends Component {
//   state = { selected: [] };
//   render() {
//     return (
//       <Form
//         onSubmit={onSubmit}
//         initialValues={{ stooge: "larry", employed: false }}
//         validate={values => {
//           const errors = {};
//           if (!values.firstName) {
//             errors.firstName = "Required";
//           }
//           if (!values.lastName) {
//             errors.lastName = "Required";
//           }
//           // if (!values.age) {
//           //   errors.age = "Required";
//           // } else if (isNaN(values.age)) {
//           //   errors.age = "Must be a number";
//           // } else if (values.age < 18) {
//           //   errors.age = "No kids allowed";
//           // }
//           return Object.keys(errors).length ? errors : verifyFirstName(values);
//         }}
//         render={({
//           handleSubmit,
//           reset,
//           submitting,
//           pristine,
//           values,
//           invalid
//         }) => (
//           <SemanticForm
//             style={{ width: 400, margin: "auto" }}
//             onSubmit={handleSubmit}
//           >
//             <div>
//               <label>First Name</label>
//               <Field
//                 name="firstName"
//                 component={TextInput}
//                 type="text"
//                 placeholder="First Name"
//               />
//             </div>
//             <div>
//               <label>Last Name</label>
//               <Field
//                 name="lastName"
//                 component={TextInput}
//                 type="text"
//                 placeholder="Last Name"
//               />
//             </div>
//             <div>
//               <label>Employed</label>
//               <Field name="employed" component="input" type="checkbox" />
//             </div>
//             <div>
//               <label>Favorite Color</label>
//               <Field
//                 name="favoriteColor"
//                 options={colors}
//                 component={SelectInput}
//               />
//             </div>
//             {/* <div>
//                 <label>Toppings</label>
//                 <Field
//                   name="toppings"
//                   options={foods}
//                   component={SelectInput}
//                 />
//               </div>
//               <div>
//                 <label>Sauces</label>
//                 <div>
//                   <label>
//                     <Field
//                       name="sauces"
//                       component={CheckInput}
//                       type="checkbox"
//                       value="ketchup"
//                     />{" "}
//                     Ketchup
//                   </label>
//                   <label>
//                     <Field
//                       name="sauces"
//                       component={CheckInput}
//                       type="checkbox"
//                       value="mustard"
//                     />{" "}
//                     Mustard
//                   </label>
//                   <label>
//                     <Field
//                       name="sauces"
//                       component={CheckInput}
//                       type="checkbox"
//                       value="mayonnaise"
//                     />{" "}
//                     Mayonnaise
//                   </label>
//                   <label>
//                     <Field
//                       name="sauces"
//                       component={CheckInput}
//                       type="checkbox"
//                       value="guacamole"
//                     />{" "}
//                     Guacamole 🥑
//                   </label>
//                 </div>
//               </div>
//               <div>
//                 <label>Best Stooge</label>
//                 <div>
//                   <label>
//                     <Field
//                       name="stooge"
//                       component={RadioInput}
//                       type="radio"
//                       value="larry"
//                       label="Larry"
//                     />
//                     <Field
//                       name="stooge"
//                       component={RadioInput}
//                       type="radio"
//                       value="moe"
//                       label="Moe"
//                     />
//                     <Field
//                       name="stooge"
//                       component={RadioInput}
//                       type="radio"
//                       value="curly"
//                       label="Curly"
//                     />
//                   </label>
//                 </div>
//               </div>
//               <div>
//                 <label>Notes</label>
//                 <Field name="notes" component={TextArea} placeholder="Notes" />
//               </div> */}
//             <div className="buttons">
//               <Button
//                 positive
//                 type="submit"
//                 disabled={submitting || pristine || invalid}
//               >
//                 Submit
//               </Button>
//               <Button
//                 negative
//                 type="button"
//                 onClick={reset}
//                 disabled={submitting || pristine}
//               >
//                 Reset
//               </Button>
//             </div>
//             {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
//           </SemanticForm>
//         )}
//       />
//     );
//   }
// }

// export default FinalForm;

import React from "react";
import Sidebar from "react-sidebar";

import LeftSidebar from "../sidebar/Sidebar/LeftSidebar";

class Test extends React.Component {
  state = {
    sidebarOpen: false
  };
  onSetSidebarOpen = open => {
    this.setState({ sidebarOpen: open });
  };

  render() {
    const sidebarContent = <LeftSidebar />;

    return (
      <Sidebar docked pullRight>
        <LeftSidebar />
      </Sidebar>
    );
  }
}

export default Test;
