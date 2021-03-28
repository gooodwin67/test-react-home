import React from 'react';
import './MessagesProfile.css';
import { Link } from 'react-router-dom';

export class MessagesProfile extends React.Component {
  render() {
    let link = '/messages/' + this.props.id
    return (
      <div className = 'messages_profile_wrap'>
        <Link to = {link}>
          <div className = 'messages_profiles_avatar_img'>
            <img src = {this.props.avatarImg} />
          </div>
          <div className = 'messages_profiles_avatar_name'>{this.props.name}</div>
        </Link>
      </div>
    )
  }
}