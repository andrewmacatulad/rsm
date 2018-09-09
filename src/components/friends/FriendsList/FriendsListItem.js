import React from "react";
import { Card, Image } from "semantic-ui-react";

const FriendsListItem = ({ friend }) => {
  return (
    <Card>
      <Image src={friend.profilePictureURL || "/assets/user.png"} />
      <Card.Content textAlign="center">
        <Card.Header content={friend.name} />
      </Card.Content>
    </Card>
  );
};

export default FriendsListItem;
