import React, { Component } from 'react'
import MatchCard from './MatchCard'

export class App extends Component {
  state = {
    matches: []
  }

  componentDidMount() {
    fetch('https://www.scorebat.com/video-api/v1/')
      .then(response => response.json())
      .then(matches => this.setState({ matches: matches }))
  }

  render() {
    return (
      <div>
        {this.state.matches.map((match, i) => {
          console.log("Entered")
          return (<MatchCard key={i} match={match} />)
        })}
      </div>
    )
  }
}

export default App
