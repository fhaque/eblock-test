import React from "react";

import "./SubNavLink.css";

const SubNavLink = ({ selected, children, className, ...props }) => (
  <a
    className={`sub-nav-link ${className} ${selected && "selected"}`}
    {...props}
  >
    {children}
  </a>
);

export default SubNavLink;
