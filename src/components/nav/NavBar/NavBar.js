import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withFirebase } from "react-redux-firebase";
import { NavLink, Link } from "react-router-dom";
import firebase from "firebase/app";
import SignedInMenu from "../Menus/SignedInMenu";

const mapStateToProps = state => ({ auth: state.firebase.auth });
class NavBar extends Component {
  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;
    return (
      <Menu stackable inverted size="massive">
        <Container>
          <Menu.Item as={Link} to="/" header>
            RPG SOCIAL MEDIA
          </Menu.Item>
          {authenticated && authenticated ? (
            <SignedInMenu auth={auth} signOut={this.handleSignOut} />
          ) : (
            <Menu.Item as={NavLink} to="/login" name="Login" />
          )}
          {/* <Menu.Item as={NavLink} to="/login" name="Login" /> */}
          <Menu.Item as={NavLink} to="/friends" name="Friends" />
          <Menu.Item as={NavLink} to="/quests" name="Quests" />
          <Menu.Item as={NavLink} to="/settings" name="Settings" />
          <Menu.Item color="red">
            <img
              src="https://pbs.twimg.com/profile_images/1000303810642837504/LQmBgJmU_400x400.jpg"
              alt=""
            />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default withRouter(withFirebase(connect(mapStateToProps)(NavBar)));
