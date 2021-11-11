import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalButton, Question } from '../GlobalStyle'


const EasyLevel = styled.div`
display: flex;
flex-direction: column;
`
export const LessonBar = styled.div`
display: flex;
justify-content: space-between;
`
export const MCQdiv = styled.div`
display: flex;
flex-direction: column;
`
export const MCQinner = styled.div`
display: flex;
justify-content: space-between;
`
export const TotalCorrect = styled.h1`
text-align:center;
word-spacing: 10px;
`
export const ResetButtonDiv = styled.div`
padding-left:30%;
`


const EasyLevelPage = () => {
    return (
        <EasyLevel>
            <LessonBar>
                <h1>Naveen Bhati</h1>
                <h1>Lesson 1</h1>
                <h1>Total XP : 2300</h1>
            </LessonBar>
            <br /><br /><br /><br />
            <Question>Q1. What is the 2nd form of "Jump" ? </Question>
            <br /><br />
            <MCQdiv>
                <MCQinner>
                    <GlobalButton width='350px'>Jumped</GlobalButton>
                    <GlobalButton width='350px'>Jumping</GlobalButton>
                </MCQinner>
                <br />
                <MCQinner>
                    <GlobalButton width='350px'>Jemp</GlobalButton>
                    <GlobalButton width='350px'>jomp</GlobalButton>
                </MCQinner>
            </MCQdiv>
            <br /><br /><br />
            <TotalCorrect>
                Correct / Total : 3 / 10
            </TotalCorrect>
            <br /><br /><br />
            <ResetButtonDiv><Link to='/level'><GlobalButton width='250px' > Start Again </GlobalButton></Link></ResetButtonDiv>
        </EasyLevel>
    )
}

export default EasyLevelPage
