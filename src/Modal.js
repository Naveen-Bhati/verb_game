import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalButton } from './GlobalStyle'
import { ResetButtonDiv } from './hoc/HOCMain'
import { setShowModalFalse } from './redux/actions/gameActions'
const ModalStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 550px;
width: 700px;
background-color: ${({ theme }) => theme.bg};
margin: auto;
position: absolute;
z-index: 999;
top: 0;
left: 0;
right: 0;bottom: 0;
text-align: center;
border-radius: 20px;
padding: 20px;
 i{   
     font-size: 80px;
 }
 .success{
     color: #4CB131;
 }
 .failed{
     color: #F70000;
 }
 div i{
     font-size: 30px;
      position: absolute;
     top: 20px;
     right: 20px;
     margin: auto;
     color: #262626;
 }
 h1{
     font-size: large;
 }

 @media only screen and (max-width:768px){
     height: 200px;
     width: 250px;
      i{
     font-size: 40px;
 }
 }
`

const Modal = ({ mistakeCount }) => {

    const { totalXP } = useSelector(state => state.totalXPreducer)
    const [playerName] = useState(JSON.parse(localStorage.getItem('playerName')))
    const dispatch = useDispatch()
    const okayButtonHandler = () => {
        dispatch(setShowModalFalse())
    }
    console.log(mistakeCount);
    return (
        <div className="backDrop">
            <ModalStyle>
                <div>
                    <h1>Congratulations {playerName}</h1>
                    <br /><hr />
                </div>
                <h1>your score is {totalXP}</h1>
                <h1>
                    you have earned {mistakeCount >= 5 ? 0 : (mistakeCount >= 3 ? 1 : (mistakeCount >= 1 ? 2 : 3))} STARS
                </h1>
                <h1>your badgeList is {`>>>`} [noob,beginnr,pro,OP]</h1>
                <h1>{playerName}, you are now a verb_expert </h1>
                <ResetButtonDiv>
                    <GlobalButton onClick={okayButtonHandler} width='250px' > Okay </GlobalButton>
                </ResetButtonDiv>
            </ModalStyle>
        </div>
    )
}

export default Modal
