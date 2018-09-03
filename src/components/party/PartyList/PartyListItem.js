import React from "react";
import { Segment, Label, Button, List } from "semantic-ui-react";

const PartyListItem = ({ loading, party, handleClick, deleteParty }) => {
  return (
    <Segment>
      <Label>{party.title}</Label>
      <Label>{party.partyLeader.name}</Label>
      <p>{party.description}</p>
      <Button
        loading={loading}
        positive
        inverted
        onClick={() => handleClick(party._id)}
      >
        Join Party
      </Button>
      <Button
        loading={loading}
        negative
        floated="right"
        onClick={() => deleteParty(party._id)}
      >
        Leave Party
      </Button>
      <List>
        {party.partyMembers.map(members => (
          <List.Item key={members._id}>{members.name}</List.Item>
        ))}
      </List>
    </Segment>
  );
};

export default PartyListItem;
