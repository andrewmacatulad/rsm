import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter, NavLink, Link } from "react-router-dom";
import SignedInMenu from "../Menus/SignedInMenu";
import { removeUser } from "../../../auth/authActions";

const mapStateToProps = state => ({ auth: state.auth });
class NavBar extends Component {
  handleSignOut = () => {
    this.props.removeUser();
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    // const authenticated = auth.isLoaded && !auth.isEmpty;
    if (!auth) {
      return <h2>Loading</h2>;
    }
    return (
      <Menu stackable inverted size="massive">
        <Container>
          <Menu.Item as={Link} to="/" header>
            RPG SOCIAL MEDIA
          </Menu.Item>
          {auth.user && auth.user ? (
            <SignedInMenu auth={auth} signOut={this.handleSignOut} />
          ) : (
            <Menu.Item as={NavLink} to="/login" name="Login" />
          )}
          <Menu.Item as={NavLink} to="/profile" name="Profile" />
          {auth.user && auth.user.level >= 10 ? (
            <Menu.Item as={NavLink} to="/equipment" name="Equipment" />
          ) : (
            <Menu.Item disabled name="Equipment" />
          )}
          <Menu.Item as={NavLink} to="/party" name="Party" />
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

export default withRouter(
  connect(
    mapStateToProps,
    { removeUser }
  )(NavBar)
);
