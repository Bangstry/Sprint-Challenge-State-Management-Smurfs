import React, { useState } from "react";
import { connect } from "react-redux";
import { newSmurf } from "../actions";
import { Input, Button } from "semantic-ui-react";

const Form = props => {
  const [createSmurf, setCreateSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (createSmurf.name != "" && createSmurf.age != "" && createSmurf.height != "") {
      props.newSmurf(createSmurf);
      setCreateSmurf({
        name: "",
        age: "",
        height: ""
      });
    }
  };
  
  const handleChange = e => {
    setCreateSmurf({
      ...createSmurf,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="new-smurf">
      <Input
        name="name"
        placeholder="Name"
        value={createSmurf.name}
        onChange={handleChange}
      />
      <Input
        name="age"
        placeholder="Age"
        value={createSmurf.age}
        onChange={handleChange}
      />
      <Input
        name="height"
        placeholder="Height"
        value={createSmurf.height}
        onChange={handleChange}
      />
      <Button color="green" type="submit">
        Create New Smurf
      </Button>
    </form>
  );
};

export default connect(
  null,
  { newSmurf }
)(Form);