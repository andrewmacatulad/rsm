import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import { connect } from "react-redux";

import { closeModal } from "./modalActions";
import PartyForm from "../party/PartyForm/PartyForm";

const actions = { closeModal };

class EquipmentModal extends Component {
  render() {
    return (
      <Modal
        closeOnDimmerClick={false}
        closeIcon
        size="large"
        open={true}
        onClose={this.props.closeModal}
      >
        <Modal.Header>Create Party</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <PartyForm />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default connect(
  null,
  actions
)(EquipmentModal);
