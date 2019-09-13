import React from "react";

const initialState = {
  smurfs: [],
  editing: false,
  edit_changes: {
    name: "",
    age: "",
    height: "",
    id: ""
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BEGIN_EDITING":
      return {
        ...state,
        editing: true,
        edit_changes: {
          ...action.payload
        }
      };
    case "STOP_EDITING":
      console.log("stop");
      return {
        ...state,
        editing: false
      };

      case "FETCH_SUCCESS":
      return {
        ...state,
        smurfs: action.payload
      };

    default:
      return state;
  }
};