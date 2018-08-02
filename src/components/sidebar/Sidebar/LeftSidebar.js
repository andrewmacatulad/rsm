// import React from "react";
// import { NavLink } from "react-router-dom";
// import { Icon, Menu, Sidebar } from "semantic-ui-react";

// const LeftSidebar = ({ animation, direction, visible }) => (
//   <Sidebar
//     width="thin"
//     style={{ position: "absolute", paddingBottom: "100px" }}
//     as={Menu}
//     animation={animation}
//     icon="labeled"
//     inverted
//     floated="right"
//     vertical
//     visible={visible}
//   >
//     <Menu.Item as="a">
//       <Icon name="home" />
//       Home
//     </Menu.Item>
//     <Menu.Item as="a">
//       <Icon name="handshake" />
//       Party
//     </Menu.Item>
//     <Menu.Item as={NavLink} to="/guild">
//       <Icon name="universal access" />
//       Guild
//     </Menu.Item>

//     <Menu.Item as="a">
//       <Icon name="users" />
//       Friends
//     </Menu.Item>
//     <Menu.Item as={NavLink} to="/equipment">
//       <Icon name="shield" />
//       Equipment
//     </Menu.Item>
//   </Sidebar>
// );

// export default LeftSidebar;

import React from "react";
import { NavLink } from "react-router-dom";
import { Icon, Menu, Sidebar } from "semantic-ui-react";

const LeftSidebar = () => (
  <Menu vertical floated="right">
    <Menu.Item as="a">
      <Icon name="home" />
      Home
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="handshake" />
      Party
    </Menu.Item>
    <Menu.Item as={NavLink} to="/guild">
      <Icon name="universal access" />
      Guild
    </Menu.Item>

    <Menu.Item as="a">
      <Icon name="users" />
      Friends
    </Menu.Item>
    <Menu.Item as={NavLink} to="/equipment">
      <Icon name="shield" />
      Equipment
    </Menu.Item>
  </Menu>
);

export default LeftSidebar;
