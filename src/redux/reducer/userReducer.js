import * as Type from "../action";

const initialState = {
  users: [],
  user: {},
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.GET_USER:
      return {
        ...state,
        users: action.payload,
        loading: true,
      };

    default:
      return state;
  }
};

export default userReducer;
