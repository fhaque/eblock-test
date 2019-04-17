import React from "react";

import "./FrameWithSidebar.css";

const FrameWithSidebar = ({
  sidebar: SidebarElement,
  children,
  className = "",
  ...props
}) => (
  <div className={`frame-with-sidebar ${className}`} {...props}>
    <div className="frame-with-sidebar__sidebar">
      <SidebarElement />
    </div>
    <div className="frame-with-sidebar__content">{children}</div>
  </div>
);

export default FrameWithSidebar;
