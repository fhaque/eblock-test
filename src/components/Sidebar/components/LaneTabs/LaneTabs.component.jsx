import React from "react";

import "./LaneTabs.css";

const LaneTabs = ({ children, className = "", ...props }) => (
  <ul className={`lane-tabs ${className}`} {...props}>
    {React.Children.map(children, child => (
      <li>{child}</li>
    ))}
  </ul>
);

export default LaneTabs;
