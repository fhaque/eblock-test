import React from "react";
import searchIcon from "../../assets/icons/search-icon.png";
import clockIcon from "../../assets/icons/clock-icon.png";
import checkIcon from "../../assets/icons/check-icon.png";
import listIcon from "../../assets/icons/list-icon.png";
import carIcon from "../../assets/icons/car-icon.png";

export const ICONMAP = {
  search: searchIcon,
  clock: clockIcon,
  check: checkIcon,
  list: listIcon,
  car: carIcon
};

const Icon = ({ name, className = "", ...props }) => (
  <>
    <img src={ICONMAP[name]} alt="" className={className} {...props} />
  </>
);

export default Icon;
