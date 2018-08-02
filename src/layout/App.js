import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Container, Sidebar, Button, Menu } from "semantic-ui-react";

import NavBar from "../components/nav/NavBar/NavBar";
import HomePage from "../components/home/HomePage";
import Friends from "../components/friends/Friends";
import Settings from "../components/settings/Settings";
import QuestDashboard from "../components/quests/QuestDashboard.js/QuestDashboard";
import LeftSidebar from "../components/sidebar/Sidebar/LeftSidebar";
import Equipment from "../components/equipment/Equipment/Equipment";
import GuildDashboard from "../components/guild/GuildDashboard/GuildDashboard";
import SocialLogin from "../auth/SocialLogin/SocialLogin";

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

class App extends Component {
  state = { visible: false };

  handleButtonClick = () => this.setState({ visible: !this.state.visible });

  handleSidebarHide = () => this.setState({ visible: false });
  render() {
    const { visible } = this.state;
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Container>
          <Switch>
            <Route path="/friends" component={Friends} />
            <Route path="/settings" component={Settings} />
            <Route path="/quests" component={QuestDashboard} />
            <Route path="/equipment" component={Equipment} />
            <Route path="/guild" component={GuildDashboard} />
            <Route path="/login" component={SocialLogin} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
