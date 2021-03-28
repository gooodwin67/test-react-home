import React from 'react';
import './Content.css';
import { Profile } from "./profile/Profile";
import { Messages } from "./messages/Messages";
import { Route } from 'react-router-dom';

export class Content extends React.Component {
  render() {
    return (
      <div className = 'content_wrap'>
        <Route path = '/profile' render = { () => <Profile state = {this.props.state} />}></Route>
        <Route path = '/messages' render = { () => <Messages state = {this.props.state} />}></Route>
      </div>
    )
  }
}