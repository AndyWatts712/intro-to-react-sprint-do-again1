// Write your Character component here
import React from 'react';
import Details from './Details';

function Characters(props) {
    console.log('PROPS', props)
    const { char } = props

    return(
        <>
        <h2>{char.name}</h2>
            {char && <Details char = {char} />}
        </>
    ) 
}

export default Characters;