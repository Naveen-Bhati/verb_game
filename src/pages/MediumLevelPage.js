import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalButton, Question } from '../GlobalStyle'
import { LessonBar, ResetButtonDiv, TotalCorrect } from './EasyLevelPage'


const MediumLevel = styled.div`
display: flex;
flex-direction: column;
`
export const InputAnsDiv = styled.div`
display: flex;
justify-content:space-around;
align-items: center;
padding:0 100px;
input{
    padding: 15px 20px;
    width: 350px;
    border-radius: 50px;
    background-color: #70DB9D;
    border: 2px solid white;
}
`

const MediumLevelPage = () => {
    return (
        <MediumLevel>
            <LessonBar>
                <h1>Naveen Bhati</h1>
                <h1>Lesson 1</h1>
                <h1>Total XP : 2300</h1>
            </LessonBar>
            <br /><br /><br />
            <Question>Q1. What is the 2nd form of "Jump" ? </Question>
            <br /><br />
            <InputAnsDiv>
                <h1>II FORM</h1>
                <input type="text" />
            </InputAnsDiv>
            <br /><br />
            <InputAnsDiv>
                <h1>III FORM</h1>
                <input type="text" />
            </InputAnsDiv>
            <br /><br /><br />
            <ResetButtonDiv><Link to='/level'><GlobalButton width='250px' > Submit </GlobalButton></Link></ResetButtonDiv>
            <br /><br />
            <TotalCorrect>
                Correct / Total : 3 / 10
            </TotalCorrect>
            <br /><br />
            <ResetButtonDiv><Link to='/level'><GlobalButton width='250px' > Start Again </GlobalButton></Link></ResetButtonDiv>
        </MediumLevel>
    )
}

export default MediumLevelPage
