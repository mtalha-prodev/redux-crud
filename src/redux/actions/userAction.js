import axios from "axios";
import * as Type from "../action";

// get all user
const getUsers = (users) => {
  return {
    type: Type.GET_USER,
    payload: users,
  };
};

export const loadUser = () => async (dispatch) => {
  try {
    const user = await axios.get("http://localhost:5000/users");

    dispatch(getUsers(user.data));
  } catch (error) {
    console.log(error);
  }
};

// add user
const userAdd = () => {
  return {
    type: Type.ADD_USER,
  };
};

export const addUser = (user) => async (dispatch) => {
  try {
    await axios.post(`http://localhost:5000/users`, user);
    dispatch(userAdd());
    dispatch(loadUser());
  } catch (error) {
    console.log(error);
  }
};

// delete user

const deleteUser = () => {
  return {
    type: Type.DELETE_USER,
  };
};

export const userDelete = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/users/${id}`);
    dispatch(deleteUser());
    dispatch(loadUser());
  } catch (error) {
    console.log(error);
  }
};
// get single user

const getUser = (user) => {
  return {
    type: Type.GET_SINGLE_USER,
    payload: user,
  };
};

export const getSingleUser = (id) => async (dispatch) => {
  try {
    const user = await axios.get(`http://localhost:5000/users/${id}`);
    dispatch(getUser(user.data));
  } catch (error) {
    console.log(error);
  }
};
// update user

const updateUser = (user) => {
  return {
    type: Type.GET_SINGLE_USER,
  };
};

export const updateSingleUser = (user, id) => async (dispatch) => {
  try {
    await axios.put(`http://localhost:5000/users/${id}`, user);
    dispatch(updateUser());
  } catch (error) {
    console.log(error);
  }
};
