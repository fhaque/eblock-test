import React from "react";

import "./SubNav.css";

const SubNav = ({
  children,
  className = "",
  rightContent: RightContent,
  ...props
}) => (
  <nav className={`sub-nav ${className}`} {...props}>
    <div className="sub-nav__left-content">
      <ul>
        {React.Children.map(children, child => (
          <li>{child}</li>
        ))}
      </ul>
    </div>
    {RightContent && (
      <div className="sub-nav__right-content">
        <RightContent />
      </div>
    )}
  </nav>
);

export default SubNav;
