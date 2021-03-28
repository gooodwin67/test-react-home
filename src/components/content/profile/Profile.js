import React from 'react';
import './Profile.css';
import { Mynews } from './mynews/Mynews'

export class Profile extends React.Component {
  render() {
    return (
      <div className = 'profile_wrap'>
        Profile
        <hr />
        <Mynews state = {this.props.state}/>
      </div>
    )
  }
}