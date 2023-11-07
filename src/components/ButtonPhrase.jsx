import React from 'react'
import getRandomFromArr from '../services/getRandomFromArr'
import phrases from '../utils/phrases.json'
import bgArr from '../utils/bgArr.json'

export const ButtonPhrase = ({ setPhraseRandom, setBgApp }) => {

    const handleChangePhrase = () => {
        const quote = getRandomFromArr(phrases)
        setPhraseRandom(quote)
        setBgApp(getRandomFromArr(bgArr))
    }

    return (
        <button
            className='app__btn' onClick={handleChangePhrase}>
            Ver otro
        </button>
    )
}
