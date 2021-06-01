import { USER_DATA } from "../actions/Types";

const initialState = {
  user_data: [],
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        user_data: action.payload,
      };

    default:
      return state;
  }
}
