import React from "react";

import "./MainNavLink.css";
import Icon from "../Icon/Icon";

const MainNavLink = ({
  icon,
  selected,
  children,
  className = "",
  ...props
}) => (
  <a
    className={`main-nav-link ${className} ${selected && "selected"}`}
    {...props}
  >
    {icon && <Icon name={icon} className="main-nav-link__icon" />}
    <p className="main-nav-link__content">{children}</p>
  </a>
);

export default MainNavLink;
