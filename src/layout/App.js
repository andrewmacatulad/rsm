import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import { Container } from "semantic-ui-react";

import NavBar from "../components/nav/NavBar/NavBar";
import HomePage from "../components/home/HomePage";
import SettingsDashboard from "../components/user/Settings/SettingsDashboard";
import QuestDashboard from "../components/quests/QuestDashboard/QuestDashboard";
// import LeftSidebar from "../components/sidebar/Sidebar/LeftSidebar";
import Equipment from "../components/equipment/Equipment/Equipment";
import GuildDashboard from "../components/guild/GuildDashboard/GuildDashboard";
import SocialLogin from "../auth/SocialLogin/SocialLogin";
import { setUser, testLevelSecure } from "../auth/authActions";
import Profile from "../components/profile/ProfileDashboard/ProfileDashboard";
import Photos from "../components/photos/Photos";
import Photo from "../components/photos/Photo";
import ModalManager from "../components/modals/ModalManager";
import EquipmentDashboard from "../components/equipment/Equipment/EquipmentDashboard";

import {
  UserIsAuthenticated,
  userIsNotAuthenticated,
  UserLevelIsNotEnough
} from "../auth/authWrapper";
import Test from "./Test";
import LevelChecker from "./LevelChecker";
import PartyDashboard from "../components/party/Party/PartyDashboard";
import FriendsDashboard from "../components/friends/Friends/FriendsDashboard";
import QuestForm from "../components/quests/QuestForm/QuestForm";

class App extends Component {
  // state = { visible: false };

  // handleButtonClick = () => this.setState({ visible: !this.state.visible });

  // handleSidebarHide = () => this.setState({ visible: false });
  componentDidMount() {
    this.props.setUser();
    if (this.props.auth.user !== false) {
      this.props.testLevelSecure();
    }
  }
  render() {
    // const { visible } = this.state;
    const { auth } = this.props;
    return (
      <div>
        <NavBar />
        <ModalManager />
        {auth.user && auth.user === false ? (
          <Switch>
            <Route exact path="/" component={Test} />
          </Switch>
        ) : (
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
            </Switch>
          </div>
        )}
        <Container>
          <Switch>
            <Route exact path="/test" component={LevelChecker} />
            <Route
              path="/friends"
              component={userIsNotAuthenticated(FriendsDashboard)}
            />
            <Route path="/settings" component={SettingsDashboard} />
            <Route
              path="/quests"
              component={userIsNotAuthenticated(QuestDashboard)}
            />
            <Route
              path="/quest/add"
              component={userIsNotAuthenticated(QuestForm)}
            />
            {/* <Route
              path="/equipment"
              component={UserLevelIsNotEnough(EquipmentDashboard)}
            /> */}
            <Route path="/equipment" component={EquipmentDashboard} />
            <Route path="/profile" component={Profile} />
            <Route path="/guild" component={GuildDashboard} />
            <Route path="/login" component={SocialLogin} />
            <Route path="/photos" component={Photos} />
            <Route path="/photo" component={Photo} />
            <Route
              path="/party"
              component={userIsNotAuthenticated(PartyDashboard)}
            />
          </Switch>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default withRouter(
  connect(
    mapStateToProps,
    { setUser, testLevelSecure }
  )(App)
);

// class App extends Component {
//   state = { visible: false };

//   handleButtonClick = () => this.setState({ visible: !this.state.visible });

//   handleSidebarHide = () => this.setState({ visible: false });
//   render() {
//     const { visible } = this.state;
//     return (
//       <div>
//         <Sidebar.Pushable
//           style={{
//             display: "flex",
//             minHeight: "94.3vh",
//             flexDirection: "column"
//           }}
//         >
//           <LeftSidebar animation="push" visible={visible} />
//           <Sidebar.Pusher>
//             <NavBar />
//             <Switch>
//               <Route exact path="/" component={Friends} />
//             </Switch>
//             <Container>
//               <Switch>
//                 <Route path="/friends" component={Friends} />
//                 <Route path="/settings" component={Settings} />
//                 <Route path="/quests" component={QuestDashboard} />
//                 <Route path="/equipment" component={Equipment} />
//                 <Route path="/guild" component={GuildDashboard} />
//               </Switch>
//             </Container>
//           </Sidebar.Pusher>
//         </Sidebar.Pushable>
//         <div>
//           <Button
//             size="massive"
//             style={{
//               position: "fixed",
//               bottom: 0,
//               right: 0
//             }}
//             primary
//             floated="right"
//             onClick={this.handleButtonClick}
//           >
//             Parang Chat button sa FB
//           </Button>
//           <Menu
//             inverted
//             color="green"
//             borderless
//             style={{
//               flexShrink: 0, //don't allow flexbox to shrink it
//               borderRadius: 0 //clear semantic-ui style
//             }}
//           >
//             <Menu.Item header>Fixed Footer</Menu.Item>
//           </Menu>
//         </div>
//       </div>
//     );
//   }
// }
