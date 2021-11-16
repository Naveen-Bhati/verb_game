import React, { useState } from 'react'
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


const LevelPage = ({ playerName }) => {
    const [lessonNo, setLessonNo] = useState(1)
    return (
        <Level>
            <Question> Please Choose Your Difficulty Level {playerName}</Question>
            <br /><br /><br />
            <LevelDiv>
                <Link to={`/easy/:${lessonNo}`}><GlobalButton>Easy</GlobalButton></Link>
                <br />
                <Link to={`/medium/:${lessonNo}`}><GlobalButton>Medium</GlobalButton></Link>
                <br />
                <Link to={`/hard/:${lessonNo}`}><GlobalButton>Hard</GlobalButton></Link>
            </LevelDiv>
        </Level>
    )
}

export default LevelPage
