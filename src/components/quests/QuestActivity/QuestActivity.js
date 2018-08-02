import React, { Component } from "react";
import { Segment, Feed, Label, Image } from "semantic-ui-react";
import QuestActivityItem from "./QuestActivityItem";

export default class QuestActivity extends Component {
  state = { hideSegment: false };
  handleButtonClick = () =>
    this.setState({ hideSegment: !this.state.hideSegment });
  render() {
    const { quests } = this.props;
    const { hideSegment } = this.state;
    return (
      <div>
        {hideSegment ? (
          <Image
            size="tiny"
            centered
            circular
            onClick={this.handleButtonClick}
            src="https://firebasestorage.googleapis.com/v0/b/eventsproj-ce0cf.appspot.com/o/rVcp7CcgKbMXiXRIY8ZOx5dZvrK2%2Fuser_images%2Fcjja15xjp00033a5qkdyf0a13?alt=media&token=9a67f8cc-b114-4f64-8b4b-fb9ba94061c5"
          />
        ) : (
          <Segment hidden={hideSegment}>
            <Label
              as="a"
              corner="right"
              icon="minus"
              onClick={this.handleButtonClick}
            />
            <Feed>
              {quests.map(quest => (
                <QuestActivityItem key={quest.questName} quest={quest} />
              ))}
            </Feed>
          </Segment>
        )}
      </div>
    );
  }
}
