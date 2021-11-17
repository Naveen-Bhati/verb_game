import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalButton, Question } from '../GlobalStyle'
import { ResetButtonDiv } from '../hoc/HOCMain'
import { useLocation } from 'react-router'



export const Lesson = styled.div`
text-align: center;
`
export const LessonDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

`






const LessonPage = () => {
    const [playerName, setPlayerName] = useState(JSON.parse(localStorage.getItem('playerName')))
    const chooseLessonHandler = (e) => {
        localStorage.setItem('lessonNo', JSON.stringify(e.target.value))
    }
    const [levelName, setLevelName] = useState('')
    const location = useLocation()
    useEffect(() => {
        if (location.pathname.startsWith('/medium')) {
            setLevelName('medium')
        } else if (location.pathname.startsWith('/easy')) {
            setLevelName('easy')
        } else {
            setLevelName('hard')
        }
    })

    return (


        <Lesson>
            <Question>Hi {playerName}, Please Choose Your Lesson </Question>
            <br /><br />
            <LessonDiv>
                <Link to={`/${levelName}/lesson?l=1&q=1`}><GlobalButton value={1} onClick={e => chooseLessonHandler(e, "value")} width='350px'>Lesson {1} </GlobalButton></Link><br />
                <Link to={`/${levelName}/lesson?l=2&q=1`}><GlobalButton value={2} onClick={e => chooseLessonHandler(e, "value")} width='350px'>Lesson {2} </GlobalButton></Link><br />
                <Link to={`/${levelName}/lesson?l=3&q=1`}><GlobalButton value={3} onClick={e => chooseLessonHandler(e, "value")} width='350px'>Lesson {3} </GlobalButton></Link><br />
                <Link to={`/${levelName}/lesson?l=4&q=1`}><GlobalButton value={4} onClick={e => chooseLessonHandler(e, "value")} width='350px'>Lesson {4}</GlobalButton></Link><br />
                <Link to={`/${levelName}/lesson?l=5&q=1`}><GlobalButton value={5} onClick={e => chooseLessonHandler(e, "value")} width='350px'>Lesson {5}</GlobalButton></Link>
            </LessonDiv>
            <br /><br />
            <ResetButtonDiv><Link to='/level'><GlobalButton width='250px' > Go Back </GlobalButton></Link></ResetButtonDiv>
        </Lesson>
    )
}

export default LessonPage
