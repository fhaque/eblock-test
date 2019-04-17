import React from "react";

import "./FiltersDropdown.css";

const FiltersDropdown = ({ className = "", ...props }) => (
  <button className={`filters-dropdown ${className}`} {...props}>
    <p className="filters-dropdown__label">filters</p>
    <div className="filters-dropdown__down-triangle" />
  </button>
);

export default FiltersDropdown;
