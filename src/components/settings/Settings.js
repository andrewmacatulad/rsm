import React, { Component } from "react";
import { Header, Grid, Segment } from "semantic-ui-react";

export default class Settings extends Component {
  render() {
    return (
      <div
        style={{ Position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
      >
        <Header as="h3" content="Stackable Divided Grid" textAlign="center" />
        <Grid columns={2} divided="vertically" stackable>
          <Grid.Row>
            <Grid.Column>
              <Segment>Content</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>Contents</Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Segment>Content</Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Segment>Content</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>Contents</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
