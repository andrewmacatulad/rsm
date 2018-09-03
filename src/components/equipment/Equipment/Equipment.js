import React from "react";
import { Image, Grid, Card, Label } from "semantic-ui-react";

const Equipment = ({ profile }) => {
  return (
    <Grid verticalAlign="middle" centered>
      <Grid.Row>
        <Grid.Column width={6} />

        <Grid.Column width={4}>
          <Card>
            <Label attached="top">Face</Label>
            <Image src={profile.equipment.face || "/assets/user.png"} />
          </Card>
        </Grid.Column>
        <Grid.Column width={6} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={5}>
          <Card>
            <Label attached="top">Weapon 1</Label>
            <Image src={profile.equipment.leftHand || "/assets/user.png"} />
          </Card>
        </Grid.Column>
        <Grid.Column width={6}>
          <Card>
            <Label attached="top">Clothes</Label>
            <Image src={profile.equipment.body || "/assets/user.png"} />
          </Card>
        </Grid.Column>
        <Grid.Column width={5}>
          <Card>
            <Label attached="top">Weapon 2</Label>
            <Image src={profile.equipment.rightHand || "/assets/user.png"} />
          </Card>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={6} />

        <Grid.Column width={4}>
          <Card>
            <Label attached="top">Pants</Label>
            <Image src={profile.equipment.body || "/assets/user.png"} />
          </Card>
        </Grid.Column>
        <Grid.Column width={6} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}>
          <Card>
            <Label attached="top">Shoes</Label>
            <Image src={profile.equipment.shoes || "/assets/user.png"} />
          </Card>
        </Grid.Column>
        <Grid.Column width={3}>
          <Card>
            <Label attached="top">Slippers</Label>
            <Image src={profile.equipment.slippers || "/assets/user.png"} />
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Equipment;
