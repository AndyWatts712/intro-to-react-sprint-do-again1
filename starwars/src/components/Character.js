// Write your Character component here
import React from 'react';

function Characters(props) {
    console.log('PROPS', props)
    const { char } = props

    return(
        <h2>{char}</h2>
    ) 
}

export default Characters;