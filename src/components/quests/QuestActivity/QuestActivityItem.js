import React, { Component } from "react";
import { Feed } from "semantic-ui-react";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

class QuestActivityItem extends Component {
  render() {
    const { quest } = this.props;
    return (
      <Feed.Event>
        <Feed.Label>
          <img src={quest.questImage} alt="" />
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>{quest.questName} quest</Feed.Summary>
          <Feed.Summary>{quest.questProgress}</Feed.Summary>
          {quest.questComplete && <Feed.Extra>complete</Feed.Extra>}

          <Feed.Meta>
            <Feed.Date>{distanceInWordsToNow(quest.questEndDate)}</Feed.Date>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    );
  }
}

export default QuestActivityItem;
