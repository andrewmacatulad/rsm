import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ProfileDetailedHeader from "../ProfileDetailed/ProfileDetailedHeader";
import LoadingComponent from "../../../layout/LoadingComponent";
import { addExp } from "../../../auth/authActions";
import { openModal } from "../../modals/modalActions";

const mapStateToProps = ({ auth }) => {
  return {
    profile: auth.user,
    loading: auth.isLoading
  };
};
class ProfileDashboard extends Component {
  AddExperience = exp => {
    this.props.addExp(exp);
    this.props.history.push("/profile");
  };
  render() {
    const { profile, loading, openModal } = this.props;
    if (profile === undefined) {
      return <LoadingComponent />;
    }
    return (
      <ProfileDetailedHeader
        openModal={openModal}
        AddExperience={this.AddExperience}
        profile={profile}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  { addExp, openModal }
)(ProfileDashboard);
