import React, { Component } from "react";
// import { Grid } from "semantic-ui-react";
import { Grid, Row, Col } from "react-flexbox-grid";
import QuestForm from "../QuestForm/QuestForm";

class QuestDashboard extends Component {
  render() {
    return (
      <Grid>
        <Row center="md">
          <Col xs={9} md={4}>
            <QuestForm />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default QuestDashboard;
