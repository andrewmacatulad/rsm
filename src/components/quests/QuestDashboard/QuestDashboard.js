import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Segment, Dropdown } from "semantic-ui-react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";

import QuestForm from "../QuestForm/QuestForm";
import LoadingComponent from "../../../layout/LoadingComponent";
import { getQuests, finishQuest, filterQuests } from "../questAction";
import QuestList from "../QuestList/QuestList";

const questTypes = [
  { key: "daily", text: "Daily", value: "daily" },
  { key: "weekly", text: "Weekly", value: "weekly" },
  { key: "monthly", text: "Monthly", value: "monthly" },
  { key: "yearly", text: "Yearly", value: "yearly" },
  { key: "all", text: "all", value: "all" }
];
class QuestDashboard extends Component {
  componentDidMount() {
    this.props.getQuests();
  }
  finishQuest = questId => {
    this.props.finishQuest(questId);
  };
  onTypeChange = (event, data) => {
    if (data.value === "all") {
      return this.props.getQuests();
    }
    this.props.filterQuests(data.value);
  };
  render() {
    const { quests, loading } = this.props;
    if (loading) {
      return <LoadingComponent />;
    }
    return (
      <Segment>
        <QuestList quests={quests.quests} finishQuest={this.finishQuest} />
        <Dropdown
          placeholder="Type"
          onChange={this.onTypeChange}
          selection
          options={questTypes}
        />
        <Button
          as={Link}
          to="/quest/add"
          color="red"
          inverted
          circular
          size="massive"
          icon="plus"
        />
      </Segment>
    );
  }
}

const mapStateToProps = ({ quests, async }) => {
  return { quests, loading: async.loading };
};

export default connect(
  mapStateToProps,
  { getQuests, finishQuest, filterQuests }
)(QuestDashboard);

// return (
//   <Grid>
//     <Row center="md">
//       <Col xs={9} md={4}>
//         <Segment>
//           <QuestList quests={quests.quests} />
//         </Segment>
//         <Button
//           as={Link}
//           to="/quest/add"
//           color="red"
//           inverted
//           circular
//           size="massive"
//           icon="plus"
//         />
//       </Col>
//     </Row>
//   </Grid>
// );
