import * as Type from "../action";

const initialState = {
  users: [],
  user: {},
  loading: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.GET_USER:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case Type.GET_SINGLE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case Type.DELETE_USER:
    case Type.ADD_USER:
    case Type.UPDATE_USER:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
