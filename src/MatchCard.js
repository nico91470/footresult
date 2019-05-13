import React from 'react'

export default function MatchCard(props) {
    return (
        <div>
            <h1>{props.match.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: props.match.embed }}></div>
        </div>
    )
}
