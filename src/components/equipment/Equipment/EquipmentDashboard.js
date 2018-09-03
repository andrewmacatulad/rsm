import React, { Component } from "react";
import { Segment, Button, Divider, Header, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import EquipmentList from "../EquipmentList/EquipmentList";
import Equipment from "./Equipment";
import { openModal } from "../../modals/modalActions";
import {
  getEquipImages,
  addEquipPhoto,
  setEquipmentPhoto
} from "../equipmentAction";

const equipmentType = [
  { text: "Face", value: "face" },
  { text: "Body", value: "body" },
  { text: "Left Hand", value: "leftHand" },
  { text: "Right Hand", value: "rightHand" },
  { text: "Shoes", value: "shoes" },
  { text: "Slippers", value: "slippers" }
];

class EquipmentDashboard extends Component {
  state = { itemUrl: "", type: "body" };

  handleClick = equipUrl => {
    console.log(equipUrl);
    this.setState({ itemUrl: equipUrl });
    this.props.setEquipmentPhoto(equipUrl, this.state.type);
  };

  async componentDidMount() {
    const getEquip = await this.props.getEquipImages(this.state.type);
  }

  // async componentWillReceiveProps(nextProps) {
  //   if (this.props.equipments !== nextProps.equipments) {
  //     const getEquips = await this.props.addEquipPhoto(this.state.type);
  //   }
  // }

  changeType = (e, { value }) => {
    this.setState({ type: value });

    this.props.getEquipImages(value);
  };
  render() {
    const { openModal, profile, equipments, loading } = this.props;
    if (!profile) {
      return <h2>Loading</h2>;
    }
    console.log(equipments);
    return (
      <Segment>
        <Equipment profile={profile} />
        <Divider />
        Type of Equipment{" "}
        <Dropdown
          onChange={this.changeType}
          value={this.state.type}
          inline
          options={equipmentType}
        />
        <Button positive onClick={() => openModal("EquipmentAddModal")}>
          Add Equipment
        </Button>
        <Header sub color="teal" content="All Shoes" />
        <EquipmentList
          loading={loading}
          equipments={equipments}
          handleClick={this.handleClick}
        />
      </Segment>
    );
  }
}

const mapStateToProps = ({ auth, equipments, async }) => {
  return {
    profile: auth.user,
    equipments: equipments.equips,
    loading: async.loading
  };
};
export default connect(
  mapStateToProps,
  { openModal, getEquipImages, addEquipPhoto, setEquipmentPhoto }
)(EquipmentDashboard);
