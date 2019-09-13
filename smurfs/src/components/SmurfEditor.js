import React, { useState } from "react";
import { connect } from "react-redux";
import { Input, Button } from "semantic-ui-react";
import { editSmurf } from "../actions";


const Edit = props => {
  const [addSmurf, setAddSmurf] = useState({
    name: props.smurf.name,
    age: props.smurf.age,
    height: props.smurf.height,
    id: props.smurf.id
  });

  const handleEdit = e => {
    setAddSmurf({
      ...addSmurf,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (addSmurf.name != "" && addSmurf.age != "" && addSmurf.height != "") {
      props.editSmurf(addSmurf);
      setAddSmurf({
        name: "",
        age: "",
        height: ""
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <Input
        name="name"
        placeholder="Smurf Name"
        value={addSmurf.name}
        onChange={handleEdit}
      />
      <Input
        name="age"
        placeholder="Age"
        value={addSmurf.age}
        onChange={handleEdit}
      />
      <Input
        name="height"
        placeholder="Height"
        value={addSmurf.height}
        onChange={handleEdit}
      />
      <Button color="blue" type="submit">
        Edit Smurf
      </Button>
    </form>
  );
};

export default connect(
  null,
  { editSmurf }
)(Edit);