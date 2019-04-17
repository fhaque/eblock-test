import React from "react";

import "./LaneItem.css";

const LaneItem = ({
  lane = "",
  auction = "",
  year = "",
  make = "",
  model = "",
  itemsRemaining = 0,
  itemsWatching,
  className = "",
  ...props
}) => (
  <div className={`lane-item ${className}`} {...props}>
    <div className="wrapper">
      <div className="lane-item__header">
        <p className="lane-item__lane">{lane}</p>
        <p className="lane-item__auction">{auction}</p>
      </div>
      <p className="lane-item__status">{`${year} ${make} ${model} is live`}</p>
      <p className="lane-item__info">
        {`${itemsRemaining} Items Remaining. `}
        {itemsWatching && (
          <span className="lane-item__watching-info">{`${itemsWatching} are on your watchlist`}</span>
        )}
      </p>
    </div>
  </div>
);

export default LaneItem;
