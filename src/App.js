import React, { Component } from 'react'
import MatchCard from './MatchCard'

import { Col, CardDeck } from 'react-bootstrap'

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
        <CardDeck>
          {this.state.matches.map((match, i) => {
            console.log("Entered")
            return (
              <Col xs lg="3">
                <MatchCard key={i} match={match} />
              </Col>
            )
          })}
        </CardDeck>
      </div>
    )
  }
}

export default App
