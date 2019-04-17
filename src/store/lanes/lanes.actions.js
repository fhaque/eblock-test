import { GET_LANES_SUCCESS, SET_LANES_FILTER } from "./lanes.constants";

export const getLanesSuccess = lanes => ({
  type: GET_LANES_SUCCESS,
  payload: lanes
});

export const setLanesFilter = filter => ({
  type: SET_LANES_FILTER,
  payload: filter
});
