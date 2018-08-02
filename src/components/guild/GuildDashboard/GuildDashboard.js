import React, { Component } from "react";
import { Button, Segment, Icon } from "semantic-ui-react";
import GuildList from "../GuildList/GuildList";

class GuildDashboard extends Component {
  render() {
    return (
      <div>
        <Segment>
          <Button positive>
            <Icon name="plus" />
            Create Guild
          </Button>
        </Segment>
        <Segment>
          <GuildList />
        </Segment>
      </div>
    );
  }
}

export default GuildDashboard;
