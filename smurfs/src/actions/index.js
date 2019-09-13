import React from "react";
import axios from "axios";

export const getSmurf = () => {
  return dispatch => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const newSmurf = data => {
  return dispatch => {
    axios
      .post("http://localhost:3333/smurfs", data)
      .then(res => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const removeSmurf = id => {
  return dispatch => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const beginEdit = data => {
  return {
    type: "BEGIN_EDITING",
    payload: data
  };
};

export const stopEdit = () => {
  return {
    type: "STOP_EDITING"
  };
};

export const editSmurf = data => {
  return dispatch => {
    axios
      .put(`http://localhost:3333/smurfs/${data.id}`, data)
      .then(res => {
        dispatch({ type: "STOP_EDITING" });
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
};