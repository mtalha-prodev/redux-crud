import axios from "axios";
import * as Type from "../action";

const getUser = (users) => {
  return {
    type: Type.GET_USER,
    payload: users,
  };
};

export const loadUser = () => async (dispatch) => {
  try {
    const user = await axios.get("http://localhost:5000/users");

    console.log(user.data);
    dispatch(getUser(user.data));
  } catch (error) {
    console.log(error);
  }
};
