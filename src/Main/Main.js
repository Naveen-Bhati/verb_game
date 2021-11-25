import React, { useEffect, useState } from 'react'
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
export const Question = styled.h1`
text-align: center;
`


export const HOCMain = ({ children }) => {

    const [playerName] = useState(JSON.parse(localStorage.getItem('playerName')))
    const [lessonNo, setLessonNo] = useState(JSON.parse(localStorage.getItem('lessonNo')))

    return (
        <HOCmainContainer>
            <LessonBar playerName={playerName} lessonNo={lessonNo} />
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

export const CompleteAnswer = styled.div``
export const InputAnsDiv = styled.div`
display: flex;
justify-content:space-around;
align-items: center;
padding:0 10%;

input{
    padding: 10px 20px;
    width: 350px;
    border-radius: 50px;
    background-color: #70DB9D;
    border: 2px solid white;
    box-sizing: border-box;
    :disabled{
      box-shadow: inset 0 0 0 1000px rgba(0,0,0,.2);
      cursor: not-allowed;
    }
}
@media only screen and (max-width: 1000px) {
  padding:0 20px;
  input{
    width: 250px;
}
}
`

export const CompleteAnsComponent = ({ firstform, secondform, thirdform, level }) => {
    const [FF, setFF] = useState('')
    const [SF, setSF] = useState('')
    const [TF, setTF] = useState('')
    const [disableFF, setDisableFF] = useState(false)
    const [disableSF, setDisableSF] = useState(false)
    const [disableTF, setDisableTF] = useState(false)


    useEffect(() => {
        const randomForm = Math.ceil(Math.random() * 3)
        if (level === 'medium') {
            setFF(firstform)
            setDisableFF(true)
        } else {
            if (randomForm === 2) {
                setSF(secondform)
                setDisableSF(true)
            }
            else if (randomForm === 1) {
                setFF(firstform)
                setDisableFF(true)
            }
            else {
                setTF(thirdform)
                setDisableTF(true)
            }

        }
    }, [level, firstform, secondform, thirdform])

    const checkVerbHandler = () => {
        if (SF === secondform && FF === firstform && TF === thirdform) {
            alert("Answer is Correct");
        } else {
            alert("Incorrect Answer");
        }
    }


    return (
        <CompleteAnswer>
            <Question>Complete the remaining forms of the verb</Question>
            <br /><br />
            <InputAnsDiv>
                <h1>I FORM</h1>
                <input type="text" value={FF} disabled={disableFF} onChange={(e) => setFF((e.target.value).toLowerCase().replace(/\s/g, ""))} />
            </InputAnsDiv>
            <br />
            <InputAnsDiv>
                <h1>II FORM</h1>
                <input type="text" value={SF} disabled={disableSF} onChange={(e) => setSF((e.target.value).toLowerCase().replace(/\s/g, ""))} />
            </InputAnsDiv>
            <br />
            <InputAnsDiv>
                <h1>III FORM</h1>
                <input type="text" value={TF} disabled={disableTF} onChange={(e) => setTF((e.target.value).toLowerCase().replace(/\s/g, ""))} />
            </InputAnsDiv>
            <br /><br />
            <ResetButtonDiv><GlobalButton onClick={checkVerbHandler} width='100px' > {`>`} </GlobalButton></ResetButtonDiv>
        </CompleteAnswer>
    )
}



