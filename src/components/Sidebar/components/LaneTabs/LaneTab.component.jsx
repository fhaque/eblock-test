import React from "react";
import { connect } from "react-redux";

import "./LaneTabs.css";
import { filterLanes } from "../../../../store/lanes/lanes.utils";
import { LANES_FILTER } from "../../../../store/lanes/lanes.constants";
import { setLanesFilter } from "../../../../store/lanes/lanes.actions";

const LaneTab = ({
  children,
  value,
  className = "",
  badgeValue,
  badgeType,
  onClick,
  selected,
  ...props
}) => (
  <button
    class={`lane-tab ${className} ${selected && "selected"}`}
    onClick={onClick}
    {...props}
  >
    <p className="lane-tab__content">{children}</p>
    {badgeValue && (
      <p
        className={`lane-tab__badge ${badgeType === "secondary" &&
          "lane-tab__badge--secondary"}`}
      >
        {badgeValue}
      </p>
    )}
  </button>
);

const mapStateToProps = (state, ownProps) => {
  const badgeValue = filterLanes(ownProps.value)(state.lanes.lanes).length;
  return {
    selected: ownProps.value === state.lanes.lanesFilter,
    ...(ownProps.value !== LANES_FILTER.ALL && badgeValue ? { badgeValue } : {})
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setLanesFilter(ownProps.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LaneTab);
