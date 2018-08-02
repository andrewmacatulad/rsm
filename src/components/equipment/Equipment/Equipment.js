import React, { Component } from "react";
import {
  Segment,
  Image,
  Grid,
  Card,
  Label,
  Divider,
  Header,
  Dropdown
} from "semantic-ui-react";
import EquipmentList from "../EquipmentList/EquipmentList";

const equipmentType = [
  { text: "Face", value: "face" },
  { text: "Shirt", value: "shirt" },
  { text: "Weapon 1", value: "weapon1" },
  { text: "Weapon 2", value: "weapon2" },
  { text: "Shoes", value: "shoes" },
  { text: "Slippers", value: "slippers" }
];
class Equipment extends Component {
  state = { itemUrl: "" };
  handleClick = equipUrl => {
    this.setState({ itemUrl: equipUrl });
  };
  render() {
    return (
      <Segment>
        <Grid verticalAlign="middle" centered>
          <Grid.Row>
            <Grid.Column width={6} />

            <Grid.Column width={4}>
              <Card>
                <Label attached="top">Face</Label>
                <Image src="https://s3-ap-southeast-1.amazonaws.com/test-social-123/5b0569ee766ef33fe8b9bc3c/d2048a20-90ea-11e8-b4e2-cd8b209f58ce.jpeg" />
              </Card>
            </Grid.Column>
            <Grid.Column width={6} />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={5}>
              <Card>
                <Label attached="top">Weapon 1</Label>
                <Image src="https://s3-ap-southeast-1.amazonaws.com/test-social-123/5b0569ee766ef33fe8b9bc3c/c0cdfec0-90eb-11e8-b4e2-cd8b209f58ce.jpeg" />
              </Card>
            </Grid.Column>
            <Grid.Column width={6}>
              <Card>
                <Label attached="top">Clothes</Label>
                <Image src="https://s3-ap-southeast-1.amazonaws.com/test-social-123/5b0569ee766ef33fe8b9bc3c/377726b0-90eb-11e8-b4e2-cd8b209f58ce.jpeg" />
              </Card>
            </Grid.Column>
            <Grid.Column width={5}>
              <Card>
                <Label attached="top">Weapon 2</Label>
                <Image src="https://s3-ap-southeast-1.amazonaws.com/test-social-123/5b0569ee766ef33fe8b9bc3c/b6c46a40-90eb-11e8-b4e2-cd8b209f58ce.jpeg" />
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6} />

            <Grid.Column width={4}>
              <Card>
                <Label attached="top">Pants</Label>
                <Image src="https://s3-ap-southeast-1.amazonaws.com/test-social-123/5b0569ee766ef33fe8b9bc3c/cb7b6270-90ed-11e8-b4e2-cd8b209f58ce.jpeg" />
              </Card>
            </Grid.Column>
            <Grid.Column width={6} />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>
              <Card>
                <Label attached="top">Shoes</Label>
                <Image
                  src={
                    this.state.itemUrl ||
                    "https://s3-ap-southeast-1.amazonaws.com/test-social-123/5b0569ee766ef33fe8b9bc3c/4da4f250-90eb-11e8-b4e2-cd8b209f58ce.jpeg"
                  }
                />
              </Card>
            </Grid.Column>
            <Grid.Column width={3}>
              <Card>
                <Label attached="top">Slippers</Label>
                <Image src="https://s3-ap-southeast-1.amazonaws.com/test-social-123/5b0569ee766ef33fe8b9bc3c/56a55430-90eb-11e8-b4e2-cd8b209f58ce.jpeg" />
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider />
        Type of Equipment{" "}
        <Dropdown
          inline
          options={equipmentType}
          defaultValue={equipmentType[4].value}
        />
        <Header sub color="teal" content="All Shoes" />
        <EquipmentList handleClick={this.handleClick} />
      </Segment>
    );
  }
}

export default Equipment;
