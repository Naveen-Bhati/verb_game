import React from 'react'
import styled from 'styled-components'
import { GlobalButton } from '../GlobalStyle'

const Level = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
position: relative;
left: 0;
padding-left: 40%;
`

const LevelPage = () => {
    return (
        <Level>
            <GlobalButton>Easy</GlobalButton>
            <br />
            <GlobalButton>Medium</GlobalButton>
            <br />
            <GlobalButton>Hard</GlobalButton>
        </Level>
    )
}

export default LevelPage
