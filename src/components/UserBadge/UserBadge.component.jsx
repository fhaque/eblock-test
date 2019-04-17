import React from "react";

import userProfileImage from "../../assets/user-profile.png";

import "./UserBadge.css";

const UserBadge = ({ children, className = "", ...props }) => (
  <button className={`user-badge ${className}`} {...props}>
    <img src={userProfileImage} alt="user" className="user-badge__user" />
    <div className="user-badge__down-triangle" />
  </button>
);

export default UserBadge;
