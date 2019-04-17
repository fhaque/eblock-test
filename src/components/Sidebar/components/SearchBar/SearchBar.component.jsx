import React from "react";
import Icon from "../../../Icon/Icon";

import "./SearchBar.css";

const SearchBar = ({ className, ...props }) => (
  <div className={`search-bar ${className}`}>
    <input
      type="search"
      placeholder="Search Live Lanes"
      className="search-bar__input"
      {...props}
    />
    <Icon name="search" className="search-bar__icon" />
  </div>
);

export default SearchBar;
