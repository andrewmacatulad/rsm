import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import { connect } from "react-redux";

import SocialLogin from "../../auth/SocialLogin/SocialLogin";
import { closeModal } from "./modalActions";

const actions = { closeModal };

class LoginModal extends Component {
  render() {
    return (
      <Modal
        size="large"
        closeOnDimmerClick={false}
        closeIcon
        open={true}
        onClose={this.props.closeModal}
      >
        <Modal.Header>Logins</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <SocialLogin />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default connect(
  null,
  actions
)(LoginModal);
