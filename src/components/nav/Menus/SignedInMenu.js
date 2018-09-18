import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SignedInMenu = ({ signOut, auth }) => {
  return (
    <Menu.Item>
      <Image
        avatar
        spaced="right"
        src={
          auth.profilePictureURL ||
          "https://pbs.twimg.com/profile_images/1000303810642837504/LQmBgJmU_400x400.jpg"
        }
      />
      <Dropdown pointing="top left" text={auth.name}>
        <Dropdown.Menu>
          <Dropdown.Item text="Create Event" icon="plus" />
          <Dropdown.Item text="My Events" icon="calendar" />
          <Dropdown.Item text="My Network" icon="users" />
          <Dropdown.Item
            as={Link}
            to="/settings"
            text="Settings"
            icon="settings"
          />
          <Dropdown.Item onClick={signOut} text="Sign Out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
