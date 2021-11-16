import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalButton, GlobalInput } from '../GlobalStyle'

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
background-color: green;

`

const StartPage = () => {
    const [playerName, setPlayerName] = useState('')
    return (
        <Start>
            <GlobalInput placeholder="Enter your name" onChange={(e) => setPlayerName(e.target.value)} />
            <ButtonDiv><Link to='/level'><GlobalButton > Start </GlobalButton></Link></ButtonDiv>
        </Start>
    )
}

export default StartPage
