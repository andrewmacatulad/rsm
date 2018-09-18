import React from "react";
import { Card, Button } from "semantic-ui-react";

const QuestListItem = ({ quest, finishQuest }) => {
  return (
    <Card>
      {/* <Image src={friend.profilePictureURL || "/assets/user.png"} /> */}
      <Card.Content textAlign="center">
        <Card.Header content={quest.questTitle} />
        <Card.Meta>{quest.questType}</Card.Meta>
        <Card.Description>{quest.questObjective}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        {quest.questFinish && quest.questFinish ? (
          <Button basic disabled color="red">
            Finish Quest
          </Button>
        ) : (
          <Button onClick={() => finishQuest(quest._id)} basic color="green">
            Finish Quest
          </Button>
        )}
      </Card.Content>
    </Card>
  );
};

export default QuestListItem;
