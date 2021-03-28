import React from 'react';
import './MessagesProfiles.css';
import { MessagesProfile } from "./messagesprofile/MessagesProfile";

export class MessagesProfiles extends React.Component {
  render() {
    return (
      <div className = 'messages_profiles_wrap'>
        
        {this.props.state.map( (el) => {
          return (
          <MessagesProfile id = {el.id} name = {el.name} avatarImg = {el.avatarImg}/>
          )
        })}
        
      </div>
    )
  }
}