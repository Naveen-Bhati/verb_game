import React, { useContext, useEffect, useState } from 'react'
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


export const LessonBar = ({ playerName, totalXP, lessonNo }) => {


    return (
        <LessonBarDiv>
            <h1>{playerName}</h1>
            <h1>Lesson {lessonNo}</h1>
            <h1>Total XP : {totalXP}</h1>
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





    const [playerName, setPlayerName] = useState(JSON.parse(localStorage.getItem('playerName')))
    const [totalXP, setTotalXP] = useState(0)
    const [lessonNo, setLessonNo] = useState(JSON.parse(localStorage.getItem('lessonNo')))


    return (
        <HOCmainContainer>
            <LessonBar playerName={playerName} totalXP={totalXP} lessonNo={lessonNo} />
            <MainQuestionContainer>
                {children}
            </MainQuestionContainer>
            <LowerDiv>
                <TotalCorrect>
                    Correct / Total : 0 / 1
                </TotalCorrect>
                <ResetButtonDiv><Link to='/level'><GlobalButton width='250px' > Start Again </GlobalButton></Link></ResetButtonDiv>
            </LowerDiv>
        </HOCmainContainer>
    )
}

export default HOCMain
