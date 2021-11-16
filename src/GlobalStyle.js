import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { ResetButtonDiv } from './hoc/HOCMain';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
     
  }
  :root{
    --dark-bg: #262626;
    --gray-1: #BCB4B4;
    --deep-dark: #1E1E1E;
    --gray-2: #363636;
    --white : white;
    --black: black;
  }
  html{
    font-size: 10px;
    font-family: 'Mochiy Pop P One', sans-serif;
    background-color: #70DB9D;
    color: white;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  input{
    color: white;
    font-size: 2.5rem;
    font-weight: bolder;
  }
  
  
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      z-index:200;
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
  .backDrop{
     position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 900;
  background: rgba(0, 0, 0, 0.75);
  }
`;

export const GameTitle = styled.nav`
color: var(--white);
font-size: 3rem;
letter-spacing: 3px;
word-spacing: 10px;
background-color: #12A869;
height: 12vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`
export const ContainerStyle = styled.div`
height: 84vh;
width: 70vw;
min-width: 500px;
background-color: #12A869;
border: 3px white solid;
position: absolute;
top: 80px;
left: 0;
right: 0;
bottom: 0;
margin: auto;
border-radius: 20px;
padding: 20px;
`

export const Container = (props) => {
  return (
    <ContainerStyle>{props.children}</ContainerStyle>
  )
}


export const GlobalButton = styled.button`
width: ${(props) => props.width ? props.width : '140px'};
padding:10px 20px;
font-family: 'Mochiy Pop P One', sans-serif;
 background-color: #70DB9D;
 color: white;
font-size: 2.5rem;
border-radius: 10px;
outline: #70DB9D;
cursor: pointer;
 :hover{
  transform: scale(1.1);
}
`
export const GlobalInput = styled.input`
padding: 15px 15px;
width: 100%;
border-radius: 10px;
outline: #70DB9D;
`

export const Question = styled.h1`
text-align: center;
`
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



export default GlobalStyles;
