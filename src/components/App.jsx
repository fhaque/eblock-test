import React from "react";

import MainNav from "./MainNav/MainNav.component";
import SubNav from "./SubNav/SubNav.component";
import LiveLanes from "./LiveLanes/LiveLanes.component";
import Sidebar from "./Sidebar/Sidebar.component";
import FrameWithSidebar from "./FrameWithSidebar/FrameWithSidebar.component";
import MainNavLink from "./MainNav/MainNavLink.component";
import SubNavLink from "./SubNav/SubNavLink.component";

import "./styles.css";
import { fetchLanes } from "../services/lanes.service";
import { connect } from "react-redux";
import { getLanesSuccess } from "../store/lanes/lanes.actions";
import UserBadge from "./UserBadge/UserBadge.component";
import FiltersDropdown from "./FiltersDropdown/FiltersDropdown.component";

class App extends React.Component {
  componentDidMount() {
    this.props.init();
  }

  render() {
    return (
      <div className="App">
        <MainNav rightContent={UserBadge}>
          <MainNavLink icon="list" selected>
            buy
          </MainNavLink>
          <MainNavLink icon="car">sell</MainNavLink>
          <MainNavLink icon="clock">pending</MainNavLink>
          <MainNavLink icon="check">finished</MainNavLink>
        </MainNav>
        <SubNav rightContent={FiltersDropdown}>
          <SubNavLink>upcoming</SubNavLink>
          <SubNavLink>live appraisals</SubNavLink>
          <SubNavLink>live 24h auctions</SubNavLink>
          <SubNavLink selected>live lanes</SubNavLink>
        </SubNav>
        <FrameWithSidebar sidebar={Sidebar}>
          <LiveLanes />
        </FrameWithSidebar>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  init: () => dispatch(getLanesSuccess(fetchLanes()))
});

App = connect(
  null,
  mapDispatchToProps
)(App);

export default App;
