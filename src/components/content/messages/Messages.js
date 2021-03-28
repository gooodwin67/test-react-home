import React from 'react';
import './Messages.css';
import { MessagesProfiles } from "./messagesprofiles/MessagesProfiles";
import { MessagesDialogs } from "./messagesdialogs/MessagesDialogs";

export class Messages extends React.Component {
  render() {
    return (
      <div className = 'messages_wrap'>
        
        <MessagesProfiles state = {this.props.state.profiles} />
        <MessagesDialogs />
        
      </div>
    )
  }
}