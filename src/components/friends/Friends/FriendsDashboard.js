import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserList, addFriend, getFriendsList } from "../friendsAction";
import { Button, Segment } from "semantic-ui-react";
import FriendsList from "../FriendsList/FriendsList";
import LoadingComponent from "../../../layout/LoadingComponent";

class FriendsDashboard extends Component {
  componentDidMount() {
    this.props.getUserList();
    this.props.getFriendsList();
  }
  render() {
    const { users, addFriend, friends, loading } = this.props;

    if (loading) {
      return <LoadingComponent />;
    }
    return (
      <div>
        {users &&
          users.map(user => {
            return (
              <Button
                onClick={() => addFriend(user._id)}
                key={user._id}
                primary
              >
                {user.name}
              </Button>
            );
          })}
        <FriendsList friends={friends} />
      </div>
    );
  }
}

const mapStateToProps = ({ friends, async }) => {
  return {
    users: friends.users,
    friends: friends.friends,
    loading: async.loading
  };
};

export default connect(
  mapStateToProps,
  { getUserList, addFriend, getFriendsList }
)(FriendsDashboard);
