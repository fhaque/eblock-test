import {
  GET_LANES_SUCCESS,
  SET_LANES_FILTER,
  LANES_FILTER
} from "./lanes.constants";

const initialState = {
  lanes: [],
  lanesFilter: LANES_FILTER.ALL
};

const lanesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_LANES_SUCCESS:
      return { ...state, lanes: action.payload };
    case SET_LANES_FILTER:
      return { ...state, lanesFilter: action.payload };
    default:
      return state;
  }
};

export default lanesReducer;
