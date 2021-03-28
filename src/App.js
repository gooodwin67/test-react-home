import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Leftbar } from './components/leftbar/Leftbar';
import { Content } from './components/content/Content';
import { BrowserRouter } from 'react-router-dom';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className = 'main_wrap wrap1200'>
            <Leftbar />
            <Content state = {this.props.state} />
          </div>
        </div>
        </BrowserRouter>
    )
  }
}
