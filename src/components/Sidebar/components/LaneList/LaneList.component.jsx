import React from "react";
import LaneItem from "./LaneItem.component";
import { connect } from "react-redux";

import "./LaneList.css";
import { filterLanes } from "../../../../store/lanes/lanes.utils";

const LaneList = ({ lanes = [], className = "", ...props }) => (
  <ul className={`lane-list ${className}`} {...props}>
    {lanes.map(lane => (
      <li key={lane.lane}>
        <LaneItem {...lane} />
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => ({
  lanes: filterLanes(state.lanes.lanesFilter)(state.lanes.lanes)
});

export default connect(
  mapStateToProps,
  null
)(LaneList);
