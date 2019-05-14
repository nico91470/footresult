import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function MatchCard(props) {
    return (
        <Card className="container" style={{ width: '35                   vh' }}>
            <Card.Img variant="top" src={props.match.thumbnail} />
            <Card.Body className="justify-content-center">
                <Card.Title style={{ fontSize: "15px" }}>{props.match.title}</Card.Title>
                <Button href={props.match.url} variant="primary">See Highlights</Button>
            </Card.Body>
        </Card>
    )
}
