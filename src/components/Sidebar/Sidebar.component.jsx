import React from "react";

import { LANES_FILTER } from "../../store/lanes/lanes.constants";

import SearchBar from "./components/SearchBar/SearchBar.component";
import LaneTabs from "./components/LaneTabs/LaneTabs.component";
import LaneTab from "./components/LaneTabs/LaneTab.component";
import LaneList from "./components/LaneList/LaneList.component";

import "./Sidebar.css";

const Sidebar = ({ className = "", ...props }) => (
  <div className={`sidebar ${className}`} {...props}>
    <div className="wrapper">
      <SearchBar />
      <LaneTabs>
        <LaneTab value={LANES_FILTER.ALL}>all</LaneTab>
        <LaneTab value={LANES_FILTER.OUTBID} badgeType="secondary">
          outbid
        </LaneTab>
        <LaneTab value={LANES_FILTER.WATCHING}>watching</LaneTab>
        <LaneTab value={LANES_FILTER.WINNING}>winning</LaneTab>
      </LaneTabs>
    </div>
    <LaneList />
  </div>
);

export default Sidebar;
