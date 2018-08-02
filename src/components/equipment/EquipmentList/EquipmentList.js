import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import EquipmentListItem from "./EquipmentListItem";

const equipments = [
  {
    id: 1,
    title: "Jordan 1",
    itemUrl:
      "https://s3-ap-southeast-1.amazonaws.com/test-social-123/5b0569ee766ef33fe8b9bc3c/411ef310-9162-11e8-9678-0bbc3d8ab9ca.jpeg"
  },
  {
    id: 2,
    title: "Jordan 2",
    itemUrl:
      "https://s3-ap-southeast-1.amazonaws.com/test-social-123/5b0569ee766ef33fe8b9bc3c/62347e30-9162-11e8-9678-0bbc3d8ab9ca.jpeg"
  },
  {
    id: 3,
    title: "Jordan 3",
    itemUrl:
      "https://s3-ap-southeast-1.amazonaws.com/test-social-123/5b0569ee766ef33fe8b9bc3c/7e2beab0-9162-11e8-9678-0bbc3d8ab9ca.jpeg"
  },
  {
    id: 4,
    title: "Jordan 4",
    itemUrl:
      "https://s3-ap-southeast-1.amazonaws.com/test-social-123/5b0569ee766ef33fe8b9bc3c/8985a5e0-9162-11e8-9678-0bbc3d8ab9ca.jpeg"
  },
  {
    id: 5,
    title: "Jordan 5",
    itemUrl:
      "https://s3-ap-southeast-1.amazonaws.com/test-social-123/5b0569ee766ef33fe8b9bc3c/f6a79340-9162-11e8-9678-0bbc3d8ab9ca.jpeg"
  },
  {
    id: 6,
    title: "Jordan 6",
    itemUrl:
      "https://s3-ap-southeast-1.amazonaws.com/test-social-123/5b0569ee766ef33fe8b9bc3c/fddcd210-9162-11e8-9678-0bbc3d8ab9ca.jpeg"
  }
];
class EquipmentList extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <Card.Group itemsPerRow={5}>
        {equipments &&
          equipments.map(equipment => (
            // <Card key={equipment.title}>
            //   <Image src={equipment.itemUrl} />
            //   <div className="ui two buttons">
            //     <Button
            //       basic
            //       color="green"
            //       onClick={() => this.handleClick(equipment.itemUrl)}
            //     >
            //       Equip
            //     </Button>
            //     <Button basic icon="trash" color="red" />
            //   </div>
            // </Card>
            <EquipmentListItem
              key={equipment.id}
              handleClick={handleClick}
              equipment={equipment}
            />
          ))}
      </Card.Group>
    );
  }
}

export default EquipmentList;
