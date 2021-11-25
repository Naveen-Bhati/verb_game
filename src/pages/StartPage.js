import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalButton, GlobalInput } from '../GlobalStyle'
import { resetLesson, resetTotalXP } from '../redux/actions/gameActions'

const Start = styled.div`
width: 70%;
height: 30%;
position: relative;
top: 35%;
left: 15%;


`
export const ButtonDiv = styled.div`
position: absolute;
top: 50%;
left: 36%;
margin: auto;

`


const StartPage = () => {
    const [playerName, setPlayerName] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('playerName', JSON.stringify(playerName))
    }, [playerName])

    const startHandler = () => {
        dispatch(resetTotalXP())
        dispatch(resetLesson())
    }


    return (

        <Start>
            <GlobalInput placeholder="Enter your name" value={playerName} onChange={(e) => setPlayerName((e.target.value).trimStart())} />
            <ButtonDiv><Link to='/level'><GlobalButton onClick={startHandler} disabled={playerName.length === 0}> Start </GlobalButton></Link></ButtonDiv>
        </Start>

    )
}

export default StartPage
