import React, { Component } from "react";
import { connect } from "react-redux";
import { testLevelSecure } from "../auth/authActions";
import LoadingComponent from "./LoadingComponent";

class LevelChecker extends Component {
  componentDidMount() {
    this.props.testLevelSecure();
  }
  render() {
    const { auth } = this.props;
    if (auth.level) {
      <LoadingComponent />;
    }
    console.log(auth);
    return (
      <div>
        {auth.level && auth.level.success ? (
          <h1>{auth.level.success}</h1>
        ) : (
          <h1>{auth.level.error}</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};
export default connect(
  mapStateToProps,
  { testLevelSecure }
)(LevelChecker);
