import React, { Component } from 'react'

export class App extends Component {

  componentDidMount() {
    fetch('https://www.scorebat.com/video_api/v1/')
    .then(response => response.json())
    .then(matches => console.log(matches))
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default App
