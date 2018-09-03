import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import { Switch, Route, Redirect } from "react-router-dom";
import SettingsNav from "./SettingsNav";
import AboutPage from "./AboutPage";
import AccountPage from "./AccountPage";
import BasicPage from "./BasicPage";
// import { updatePassword } from "../../auth/authActions";
// import { updateProfile } from "../userActions";

// const actions = {
//   updatePassword,
//   updateProfile
// };

// const mapState = state => ({
//   providerId: state.firebase.auth.providerData[0].providerId,
//   user: state.firebase.profile
// });

const SettingsDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from="/settings" to="/settings/basic" />
          <Route path="/settings/basic" render={() => <BasicPage />} />
          <Route path="/settings/about" render={() => <AboutPage />} />
          <Route path="/settings/account" render={() => <AccountPage />} />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingsNav />
      </Grid.Column>
    </Grid>
  );
};

export default SettingsDashboard;