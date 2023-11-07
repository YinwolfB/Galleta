import React from 'react'

export const Phrase = ({ phraseRandom }) => {

    return (
        <p className='app__phrase'>{phraseRandom.phrase}</p>
    )
}
