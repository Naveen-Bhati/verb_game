import React from 'react'
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

`

const StartPage = () => {
    return (
        <Start>
            <GlobalInput placeholder="Enter your name" />
            <ButtonDiv><Link to='/level'><GlobalButton > Start </GlobalButton></Link></ButtonDiv>
        </Start>
    )
}

export default StartPage
