import React, { Component } from "react";
import {
  Button,
  Sidebar,
  Grid,
  Rail,
  Segment,
  Container
} from "semantic-ui-react";
import firebase from "firebase/app";
import QuestActivity from "../quests/QuestActivity/QuestActivity";
import LeftSidebar from "../sidebar/Sidebar/LeftSidebar";
import Equipment from "../equipment/Equipment/Equipment";

const quests = [
  {
    questName: "Attend School",
    questProgress: "4/10",
    questEndDate: "2018-07-21 22:00",
    questComplete: false,
    questImage:
      "https://firebasestorage.googleapis.com/v0/b/eventsproj-ce0cf.appspot.com/o/OQ8R4f7Ih1TRldkY0TXnLgzlCPk2%2Fuser_images%2Fcjja0vj4r00003a5q9982477c?alt=media&token=747e559d-445f-4078-869e-ccb2f4b7cfc1"
  },
  {
    questName: "Take a bath",
    questProgress: "1/1",
    questEndDate: "2018-07-21 10:00",
    questComplete: true,
    questImage:
      "https://firebasestorage.googleapis.com/v0/b/eventsproj-ce0cf.appspot.com/o/954vMYS2XFTlfMAitiwW0rTtVbv1%2Fuser_images%2Fcjja12c6c00013a5qni179ihn?alt=media&token=3946104c-b1f0-417c-8197-3b359c579ce2"
  },
  {
    questName: "Take a dump",
    questProgress: "1/1",
    questEndDate: "2018-07-21 10:00",
    questComplete: true,
    questImage:
      "https://firebasestorage.googleapis.com/v0/b/eventsproj-ce0cf.appspot.com/o/rVcp7CcgKbMXiXRIY8ZOx5dZvrK2%2Fuser_images%2Fcjja15jtl00023a5qhhcechv4?alt=media&token=a10c3292-c313-4d9a-88d4-7bda0cfa55e9"
  },
  {
    questName: "Clean your bed",
    questProgress: "0/1",
    questEndDate: "2018-07-21 10:00",
    questComplete: false,
    questImage:
      "https://firebasestorage.googleapis.com/v0/b/eventsproj-ce0cf.appspot.com/o/rVcp7CcgKbMXiXRIY8ZOx5dZvrK2%2Fuser_images%2Fcjja15xjp00033a5qkdyf0a13?alt=media&token=9a67f8cc-b114-4f64-8b4b-fb9ba94061c5"
  }
];

class HomePage extends Component {
  render() {
    return (
      <Container>
        <Grid stackable columns={16}>
          <Grid.Row>
            <Grid.Column width={3}>
              <QuestActivity quests={quests} />
              <QuestActivity quests={quests} />
            </Grid.Column>
            <Grid.Column width={10}>
              <QuestActivity quests={quests} />
              <QuestActivity quests={quests} />
              <QuestActivity quests={quests} />
              <QuestActivity quests={quests} />
              <QuestActivity quests={quests} />
            </Grid.Column>
            <Grid.Column floated="right" width={3}>
              <Equipment />
              <QuestActivity quests={quests} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default HomePage;
