import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalButton, Question } from '../GlobalStyle'
import { ResetButtonDiv } from '../hoc/HOCMain'

export const Level = styled.div`
text-align: center;
padding-top: 70px;
`
export const LevelDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

`

const LevelPage = () => {
    const [playerName, setPlayerName] = useState(JSON.parse(localStorage.getItem('playerName')))
    return (
        <Level>
            <Question>Hi {playerName}, Please Choose Your Difficulty Level </Question>
            <br /><br /><br />
            <LevelDiv>
                <Link to={`/easy/lessonpage`}><GlobalButton>Easy</GlobalButton></Link>
                <br />
                <Link to={`/medium/lessonpage`}><GlobalButton>Medium</GlobalButton></Link>
                <br />
                <Link to={`/hard/lessonpage`}><GlobalButton>Hard</GlobalButton></Link>
            </LevelDiv>
            <br /><br /><br /><br />
            <ResetButtonDiv><Link to='/'><GlobalButton width='250px' > Go Back </GlobalButton></Link></ResetButtonDiv>
        </Level>
    )
}

export default LevelPage
