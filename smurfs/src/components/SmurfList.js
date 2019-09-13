import React, { useState } from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import { getSmurf, removeSmurf, beginEdit, editSmurf } from "../actions";
import { Card } from "semantic-ui-react";
import Form from "./SmurfForm";
import FormEditor from "./SmurfEditor";

const List = props => {
  useState(() => {
    props.getSmurf();
  }, []);

  const handleRemoval = id => {
    props.removeSmurf(id);
  };

  const handleEdit = data => {
    props.beginEdit(data);
  };

  return (
    <div>
      {!props.state.editing && <Form />}
      {props.state.editing && <FormEditor smurf={props.state.edit_changes} />}

      {!props.state.editing && (
        <Card.Group>
          {props.state.smurfs.map(item => {
            return (
              <Smurf
                key={item.id}
                smurf={item}
                handleRemoval={handleRemoval}
                handleEdit={handleEdit}
              />
            );
          })}
        </Card.Group>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  { getSmurf, removeSmurf, editSmurf, beginEdit }
)(List);