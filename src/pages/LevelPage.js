import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalButton, Question } from '../GlobalStyle'

const Level = styled.div`
text-align: center;
padding-top: 70px;
`
export const LevelDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

`

const LevelPage = () => {
    return (
        <Level>
            <Question> Please Choose Your Difficulty Level </Question>
            <br /><br /><br />
            <LevelDiv>
                <Link to='/easy'><GlobalButton>Easy</GlobalButton></Link>
                <br />
                <Link to='/medium'><GlobalButton>Medium</GlobalButton></Link>
                <br />
                <Link to='/hard'><GlobalButton>Hard</GlobalButton></Link>
            </LevelDiv>
        </Level>
    )
}

export default LevelPage
