import React from 'react';
import './Mynews.css';



export class Mynews extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.state

    this.addNews = this.addNews.bind(this)
  }

  addNews() {
    this.setState(state => {
      state.allnews.push({id: 4, text: 'test'})
    })
  }

  render() {
    let news = this.state.mynews.map((el) => <li>{el.text}</li>)
    return (
      <div className = 'mynews_wrap'>
        <button onClick = {this.addNews}>Add</button>
        <ul>
        {news}
        </ul>
        
      </div>
    )
  }
}