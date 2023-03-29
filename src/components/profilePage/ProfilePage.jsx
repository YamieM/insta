import React from "react";
import Profile from "../../pages/Profile";
import data from "../../posts.json";

export default class ProfilePage extends React.Component {
  state = {
    posts: data,
    isLoading: false,
  };
  render() {
    return (
      <main>
        <Profile props={data} />
      </main>
    );
  }
}
