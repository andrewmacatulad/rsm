import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import { connect } from "react-redux";

import { closeModal } from "./modalActions";
import EquipmentAdd from "../equipment/Equipment/EquipmentAdd";

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
        <Modal.Header>Add Equipment!</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <EquipmentAdd />
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
