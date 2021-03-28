import React from 'react';
import './Leftbar.css';
import { Mainmenu } from "./mainmenu/Mainmenu";

export class Leftbar extends React.Component {
  render() {
    return (
      <div className = 'leftbar_wrap'>
        <Mainmenu />
      </div>
    )
  }
}