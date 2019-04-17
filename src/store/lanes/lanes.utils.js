import { FILTER_NAME_TO_FIELD_MAP, LANES_FILTER } from "./lanes.constants";

export const filterLanes = filterName => lanes =>
  filterName === LANES_FILTER.ALL
    ? lanes
    : lanes.filter(lane => lane[FILTER_NAME_TO_FIELD_MAP[filterName]]);
