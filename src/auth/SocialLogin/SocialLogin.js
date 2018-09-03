import React from "react";
import { connect } from "react-redux";
import { Button, Icon, Divider } from "semantic-ui-react";
// import { socialLogin } from "../authActions";

const SocialLogin = () => {
  return (
    <div>
      <div>
        <Button
          as="a"
          href="http://localhost:5000/auth/facebook"
          type="button"
          style={{ marginBottom: "10px" }}
          fluid
          color="facebook"
        >
          <Icon name="facebook" /> Login with Facebook
        </Button>
        <Divider horizontal>Or</Divider>
        <Button
          as="a"
          href="http://localhost:5000/auth/google"
          type="button"
          fluid
          color="google plus"
        >
          <Icon name="google plus" />Login with Google
        </Button>
        <Divider horizontal>Or</Divider>
        <Button
          as="a"
          href="http://localhost:5000/auth/twitch"
          type="button"
          fluid
          color="purple"
        >
          <Icon name="twitch" />Login with Twitch
        </Button>
        <Divider horizontal>Or</Divider>
        <Button
          as="a"
          href="http://localhost:5000/auth/twitter"
          type="button"
          fluid
          color="twitter"
        >
          <Icon name="twitter" />Login with Twitter
        </Button>
        <Divider horizontal>Or</Divider>
        <Button
          as="a"
          href="http://localhost:5000/auth/instagram"
          type="button"
          fluid
          color="instagram"
        >
          <Icon name="instagram" />Login with Instagram
        </Button>
        <Divider horizontal>Or</Divider>
        <Button
          as="a"
          href="http://localhost:5000/auth/github"
          type="button"
          fluid
          color="grey"
        >
          <Icon name="github" />Login with Github
        </Button>
        <Divider horizontal>Or</Divider>
        <Button
          as="a"
          href="http://localhost:5000/auth/youtube"
          type="button"
          fluid
          color="youtube"
        >
          <Icon name="youtube" />Login with Youtube
        </Button>
      </div>
    </div>
  );
};

export default connect()(SocialLogin);
