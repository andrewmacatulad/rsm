import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import { connect } from "react-redux";

import { closeModal } from "./modalActions";
import ProfilePhotosAdd from "../user/Profile/ProfilePhotos/ProfilePhotosAdd";

const actions = { closeModal };

class ProfileImagesModal extends Component {
  render() {
    return (
      <Modal
        closeOnDimmerClick={false}
        closeIcon
        size="large"
        open={true}
        onClose={this.props.closeModal}
      >
        <Modal.Header>Add Profile Picture</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <ProfilePhotosAdd />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default connect(
  null,
  actions
)(ProfileImagesModal);
