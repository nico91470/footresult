import React from 'react'
import { Card } from 'react-bootstrap'

export default function MatchCard(props) {
    return (
        <Card>
            <Card.Img variant="top" src={props.match.thumbnail} />
            <Card.Body>
                <Card.Title>{props.match.title}</Card.Title>
            </Card.Body>
        </Card>
    )
}
