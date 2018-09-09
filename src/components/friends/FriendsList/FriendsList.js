import React from "react";
import { Card } from "semantic-ui-react";
import FriendsListItem from "./FriendsListItem";

const FriendsList = ({ friends }) => {
  return (
    <Card.Group itemsPerRow={2} stackable>
      {friends &&
        friends.map(friend => {
          console.log(friend.friends_id);
          return (
            <FriendsListItem
              key={friend.friends_id._id}
              friend={friend.friends_id}
            />
          );
        })}
    </Card.Group>
  );
};

export default FriendsList;
