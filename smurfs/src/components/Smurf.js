import React from "react";
import { Card, Button, Image } from "semantic-ui-react";

const smurfCard = props => {
  return (
    <Card>
      <Card.Content>
        <Image
          floated="left"
          size="mini"
          src={`http://placeimg.com/200/400/any=${props.smurf.id}`}
        />
        <Card.Header>{props.smurf.name}</Card.Header>
        <Card.Meta>
          age: {props.smurf.age}
          <p> Height: {props.smurf.height}</p>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button
            color="blue"
            onClick={() => props.handleEdit(props.smurf)}
          >
            Edit Smurf
          </Button>
          <Button
            color="red"
            onClick={() => props.handleRemoval(props.smurf.id)}
          >
            Remove Smurf
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default smurfCard;