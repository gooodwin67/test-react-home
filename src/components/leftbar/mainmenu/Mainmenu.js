import React from 'react';
import './Mainmenu.css';
import { Link } from 'react-router-dom';

export class Mainmenu extends React.Component {
  render() {
    return (
      <nav className = 'mainmenu_wrap'>
        <Link to = '/profile' className = 'mainmenu_link'>Profile</Link>
        <Link to = '/messages' className = 'mainmenu_link'>Messages</Link>
        <Link className = 'mainmenu_link'>News</Link>
      </nav>
    )
  }
}