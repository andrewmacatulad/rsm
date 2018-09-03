import React from "react";
import { Card, Button, Image } from "semantic-ui-react";

const EquipmentListItem = ({ equipment, handleClick, loading }) => {
  return (
    <Card key={equipment.name}>
      <Image
        src={
          `https://s3-ap-southeast-1.amazonaws.com/test-social-123/${
            equipment.url
          }` || "/assets/user.png"
        }
      />
      <div className="ui two buttons">
        <Button
          loading={loading}
          basic
          color="green"
          onClick={() =>
            handleClick(
              `https://s3-ap-southeast-1.amazonaws.com/test-social-123/${
                equipment.url
              }`
            )
          }
        >
          Equip
        </Button>
        <Button basic icon="trash" color="red" />
      </div>
    </Card>
  );
};

export default EquipmentListItem;
