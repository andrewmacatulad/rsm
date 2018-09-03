import React, { Component } from "react";
import { connect } from "react-redux";

import { Button } from "semantic-ui-react";
import { openModal } from "../../modals/modalActions";
import { joinParty, setPartyList, deleteParty } from "../partyAction";
import PartyList from "../PartyList/PartyList";
import LoadingComponent from "../../../layout/LoadingComponent";

class PartyDashboard extends Component {
  async componentDidMount() {
    await this.props.setPartyList();
  }
  handleClick = partyId => {
    this.props.joinParty(partyId);
  };
  deleteParty = partyId => {
    this.props.deleteParty(partyId);
  };
  render() {
    const { loading, parties } = this.props;
    if (loading) {
      return <LoadingComponent />;
    }
    console.log(parties);
    return (
      <div>
        <Button
          onClick={() => this.props.openModal("PartyModal")}
          positive
          inverted
          content="Create Party"
        />
        <h1>Party Dashboard</h1>
        <PartyList
          parties={parties}
          loading={loading}
          deleteParty={this.deleteParty}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ auth, async, party }) => {
  return {
    profile: auth.user,
    loading: async.loading,
    parties: party.party
  };
};

export default connect(
  mapStateToProps,
  { openModal, joinParty, setPartyList, deleteParty }
)(PartyDashboard);
