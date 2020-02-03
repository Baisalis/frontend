import React from "react";
import {Button} from 'reactstrap';

function Dashboard() {
  return (
    <div>
      <h1 className="App-header">Welcome To The User Dashboard</h1>
      <div className="title-container">
        <h2>Let's Find Some New Music!</h2>
        <Button color="primary">Browse</Button>
      </div>
      <div className="dashboard-container">
        <div className="split-container">
          <h2>Welcome (username)</h2>
          <p>Edit Login or Password</p>
          <form className="profile-form">
            <div className="profile-div">
              <label>Username: </label>
              <input />
            </div>
            <div className="profile-div">
              <label>Password: </label>
              <input />
            </div>
          </form>
          <Button className="profile-div" color="success">Edit Profile</Button>
        </div>
        <div className="split-container">
        <h2>Favorite Songs List</h2>
          <div className="favorites-list">
            <p>song: test</p>
            <p>artist: test</p>
            <Button color="warning">Delete Song</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
