import React from "react";
import { Card, Button, Image } from "semantic-ui-react";

const EquipmentListItem = ({ equipment, handleClick }) => {
  return (
    <Card key={equipment.title}>
      <Image src={equipment.itemUrl} />
      <div className="ui two buttons">
        <Button
          basic
          color="green"
          onClick={() => handleClick(equipment.itemUrl)}
        >
          Equip
        </Button>
        <Button basic icon="trash" color="red" />
      </div>
    </Card>
  );
};

export default EquipmentListItem;
