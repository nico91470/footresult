import React, { Component } from 'react'
import MatchCard from './MatchCard'

import { Row, Col } from 'react-bootstrap'

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
        <Row className="justify-content-md-center" >
          {this.state.matches.map((match, i) => {
            console.log("Entered")
            return (
              <Col xs lg="3">
                <MatchCard key={i} match={match} />
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }
}

export default App
