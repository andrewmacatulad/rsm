import React from "react";
import PartyListItem from "./PartyListItem";

const PartyList = ({ loading, parties, deleteParty, handleClick, profile }) => {
  return (
    <div>
      {parties &&
        parties.map(party => (
          <PartyListItem
            profile={profile}
            key={party._id}
            loading={loading}
            party={party}
            handleClick={handleClick}
            deleteParty={deleteParty}
          />
        ))}
    </div>
  );
};

export default PartyList;
