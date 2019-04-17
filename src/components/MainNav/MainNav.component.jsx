import React from "react";

import logo from "../../assets/logo.png";

import "./MainNav.css";

const MainNav = ({
  children,
  className = "",
  rightContent: RightContent,
  ...props
}) => (
  <nav className={`main-nav ${className}`} {...props}>
    <div className="main-nav__left-content">
      <img src={logo} alt="" />
      <ul>
        {React.Children.map(children, child => (
          <li>{child}</li>
        ))}
      </ul>
    </div>
    {RightContent && (
      <div className="main-nav__right--content">
        <RightContent />
      </div>
    )}
  </nav>
);

export default MainNav;
