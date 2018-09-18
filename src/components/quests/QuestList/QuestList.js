import React from "react";
import { Card } from "semantic-ui-react";
import QuestListItem from "./QuestListItem";
import LoadingComponent from "../../../layout/LoadingComponent";

const QuestList = ({ quests, finishQuest }) => {
  console.log(quests);
  return (
    <div>
      <Card.Group itemsPerRow={5} stackable>
        {quests &&
          quests.map(quest => {
            return (
              <QuestListItem
                key={quest._id}
                quest={quest}
                finishQuest={finishQuest}
              />
            );
          })}
      </Card.Group>
    </div>
  );
};

export default QuestList;
