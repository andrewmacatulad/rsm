import _ from "lodash";
import React from "react";
import { Segment, Label, Button, List } from "semantic-ui-react";

const PartyListItem = ({
  loading,
  party,
  handleClick,
  deleteParty,
  profile
}) => {
  return (
    <Segment>
      {/* {console.log(party._id)} */}
      {/* {console.log(profile.parties)} */}

      <Label>{party.title}</Label>
      <Label>{party.partyLeader.name}</Label>
      <p>{party.description}</p>
      {profile.parties && profile.parties.includes(party._id) ? (
        <div>
          <Button
            disabled
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
        </div>
      ) : (
        <Button
          loading={loading}
          positive
          inverted
          onClick={() => handleClick(party._id)}
        >
          Join Party
        </Button>
      )}
      {/* <Button
        loading={loading}
        positive
        inverted
        onClick={() => handleClick(party._id)}
      >
        Join Party
      </Button> */}

      <List>
        {party.partyMembers.map(members => {
          return <List.Item key={members._id}>{members.name}</List.Item>;
        })}
      </List>
    </Segment>
  );
};

export default PartyListItem;
