import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalButton } from '../GlobalStyle'






export const HOCmainContainer = styled.div`
height: 100%;
width: 100;
display: flex;
flex-direction: column;
justify-content: space-between;
`
export const LessonBarDiv = styled.div`
display: flex;
justify-content: space-between;
height: 5vh;
`


export const LessonBar = ({ playerName, lessonNo }) => {

    const { totalXP } = useSelector(state => state.totalXPreducer)
    return (
        <LessonBarDiv>
            <h1>{playerName}</h1>
            <h1>Lesson {lessonNo}</h1>
            <h1>Total XP : {totalXP ? totalXP : 0}</h1>
        </LessonBarDiv>
    )
}


export const MainQuestionContainer = styled.div`
`

export const TotalCorrect = styled.h1`
text-align:center;
word-spacing: 10px;
`
export const ResetButtonDiv = styled.div`
display: flex;
justify-content: center;
z-index: 200;
`
export const LowerDiv = styled.div`
height: 16vh;
display: flex;
flex-direction: column;
justify-content: space-between;
`


export const HOCMain = ({ children }) => {

    const [playerName] = useState(JSON.parse(localStorage.getItem('playerName')))
    const { lessonNo } = useSelector(state => state.lessonreducer)
    const { correctQ } = useSelector(state => state.totalXPreducer)

    return (
        <HOCmainContainer>
            <LessonBar playerName={playerName} lessonNo={lessonNo} />
            <MainQuestionContainer>
                {children}
            </MainQuestionContainer>
            <LowerDiv>
                <TotalCorrect>
                    Correct / Total : {correctQ} / 10
                </TotalCorrect>
                <ResetButtonDiv><Link to='/level'><GlobalButton width='250px' > Start Again </GlobalButton></Link></ResetButtonDiv>
            </LowerDiv>
        </HOCmainContainer>
    )
}

export default HOCMain
