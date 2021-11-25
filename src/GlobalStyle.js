import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { ResetButtonDiv } from './hoc/HOCMain';
import Modal from './Modal';
import { increaseLesson, increaseXP } from './redux/actions/gameActions';

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
    background:${({ theme }) => theme.lightBG};
    
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
    background-color: ${({ theme }) => theme.lightBG};
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

export const ThemeButton = styled.button`
position: absolute;
height: 50px;
width: 50px;
top: 15px;
right: 15px;
border-radius: 50%;
background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 90.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 90.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 90.71%);
border: 5px solid white;
box-sizing: border-box;
cursor: pointer;
:hover{
  transform: scale(1.1);
}
`

export const GameTitle = styled.nav`
color: var(--white);
font-size: 3rem;
letter-spacing: 3px;
word-spacing: 10px;
background-color: ${({ theme }) => theme.bg};
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
background-color: ${({ theme }) => theme.bg};
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
 background-color: ${({ theme }) => theme.lightBG};
 color: white;
font-size: 2.5rem;
border-radius: 10px;
outline:${({ theme }) => theme.lightBG};
cursor: pointer;
 :hover{
  transform: scale(1.1);
}
:disabled{
      box-shadow: inset 0 0 0 1000px rgba(0,0,0,.2);
      cursor: not-allowed;
    }
`
export const GlobalInput = styled.input`
padding: 15px 15px;
width: 100%;
border-radius: 10px;
outline:${({ theme }) => theme.lightBG};
border: 2px solid white;
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
    background-color: ${({ theme }) => theme.lightBG};
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

export const CompleteAnsComponent = ({ level }) => {
  var k = ["beat", "beat", "beaten", "become", "became", "become", "begin", "began", "begun", "bend", "bent", "bent", "bet", "bet", "bet", "bite", "bit", "bitten", "bleed", "bled", "bled", "blow", "blew", "blown", "break", "broke", "broken", "breed", "bred", "bred", "bring", "brought", "brought", "build", "built", "built", "burn", "burnt ", "burnt ", "buy", "bought", "bought", "catch", "caught", "caught", "choose", "chose", "chosen", "come", "came", "come", "cost", "cost", "cost", "cut", "cut", "cut", "do ", "did", "done", "dig", "dug", "dug", "draw", "drew", "drawn", "dream", "dreamt ", "dreamt ", "drink", "drank", "drunk", "drive", "drove", "driven", "eat", "ate", "eaten", "fall", "fell", "fallen", "feed", "fed", "fed", "feel", "felt", "felt", "fight", "fought", "fought", "find", "found", "found", "fly", "flew", "flown", "forget", "forgot", "forgotten", "forgive", "forgave", "forgiven", "freeze", "froze", "frozen", "get", "got", "got", "give", "gave", "given", "go", "went", "gone", "grow", "grew", "grown", "have", "had", "had", "hear", "heard", "heard", "hide", "hid", "hidden", "hit", "hit", "hit", "hold", "held", "held", "hurt", "hurt", "hurt", "keep", "kept", "kept", "know", "knew", "known", "lay", "laid", "laid", "lead", "led", "led", "lean", "leant", "leant", "leave", "left", "left", "lend", "lent", "lent", "let", "let", "let", "lose", "lost", "lost", "make", "made", "made", "mean", "meant", "meant", "meet", "met", "met", "pay", "paid", "paid", "put", "put", "put", "quit", "quit", "quit", "read", "read", "read", "ride", "rode", "ridden", "ring", "rang", "rung", "rise", "rose", "risen", "run", "ran", "run", "say", "said", "said", "see", "saw", "seen", "sell", "sold", "sold", "send", "sent", "sent", "set", "set", "set", "shake", "shook", "shaken", "shine", "shone", "shone", "shoe", "shod", "shod", "shoot", "shot", "shot", "show", "showed", "shown", "shrink", "shrank", "shrunk", "shut", "shut", "shut", "sing", "sang", "sung", "sink", "sank", "sunk", "sit", "sat", "sat", "sleep", "slept", "slept", "speak", "spoke", "spoken", "spend", "spent", "spent", "spill", "spilt", "spilt ", "spread", "spread", "spread", "speed", "sped", "sped", "stand", "stood", "stood", "steal", "stole", "stolen", "stick", "stuck", "stuck", "sting", "stung", "stung", "stink", "stank", "stunk", "swear", "swore", "sworn", "sweep", "swept", "swept", "swim", "swam", "swum", "swing", "swung", "swung", "take", "took", "taken", "teach", "taught", "taught", "tear", "tore", "torn", "tell", "told", "told", "think", "thought", "thought", "throw", "threw", "thrown", "understand", "understood", "understood", "wake", "woke", "woken", "wear", "wore", "worn", "win", "won", "won", "write", "wrote", "written"];

  let verb_data = []

  for (let i = 0; i < k.length;) {
    verb_data.push([k[i], k[i + 1], k[i + 2]])
    i = i + 3
  }

  const random1 = Math.floor(Math.random() * (verb_data.length))

  const randomArr = [1, 0, 0]

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    } return array
  };

  const [mistakeCount, setMistakeCount] = useState(0)
  const { showModal } = useSelector(state => state.lessonreducer)
  const finArr = shuffleArray(randomArr)
  const finArr2 = shuffleArray(randomArr)
  const [quesState, setQuesState] = useState({
    rand: random1,
    lessonNo: 1,
    questionNo: 1,
    ff: verb_data[random1][0],
    sf: verb_data[random1][1],
    tf: verb_data[random1][2],
    FF: (level === 'medium' ? verb_data[random1][0] : (finArr[0] === 1 ? verb_data[random1][0] : '')),
    SF: (level === 'medium' ? '' : (finArr[1] === 1 ? verb_data[random1][1] : '')),
    TF: (level === 'medium' ? '' : (finArr[2] === 1 ? verb_data[random1][2] : '')),
    disableSF: (level === 'medium' ? false : (finArr[1] === 1 ? true : false)),
    disableFF: (level === 'medium' ? true : (finArr[0] === 1 ? true : false)),
    disableTF: (level === 'medium' ? false : (finArr[2] === 1 ? true : false))
  })

  const dispatch = useDispatch()
  const checkVerbHandler = () => {
    console.log('verb', quesState.SF, quesState.TF, quesState.FF, quesState.sf, quesState.questionNo);
    if (quesState.SF === quesState.sf && quesState.FF === quesState.ff && quesState.TF === quesState.tf) {
      dispatch(increaseXP(100))
    } else {
      setMistakeCount(() => mistakeCount + 1)
    }
    const random2 = Math.floor(Math.random() * (verb_data.length))
    setQuesState({
      rand: random2,
      questionNo: (quesState.questionNo === 10 ? 1 : quesState.questionNo + 1),
      lessonNo: (quesState.questionNo === 10 ? quesState.lessonNo + 1 : quesState.lessonNo),
      ff: verb_data[random2][0],
      sf: verb_data[random2][1],
      tf: verb_data[random2][2],
      FF: (level === 'medium' ? verb_data[random2][0] : (finArr2[0] === 1 ? verb_data[random2][0] : '')),
      SF: (level === 'medium' ? '' : (finArr2[1] === 1 ? verb_data[random2][1] : '')),
      TF: (level === 'medium' ? '' : (finArr2[2] === 1 ? verb_data[random2][2] : '')),
      disableSF: (level === 'medium' ? false : (finArr2[1] === 1 ? true : false)),
      disableFF: (level === 'medium' ? true : (finArr2[0] === 1 ? true : false)),
      disableTF: (level === 'medium' ? false : (finArr2[2] === 1 ? true : false)),
    })

    if (quesState.questionNo > 10) {
      dispatch(increaseLesson())
      setMistakeCount(0)
    }
    // console.log(quesState.rand);
    // console.log(quesState.ff);
    // console.log(quesState.sf);
    // console.log(quesState.tf);
    console.log(quesState.questionNo);
    console.log(quesState.lessonNo);
  }


  return (
    <>
      {showModal && <Modal mistakeCount={mistakeCount} />}
      <CompleteAnswer>
        <Question>Complete the remaining forms of the verb</Question>
        <br /><br />
        <InputAnsDiv>
          <h1>I FORM</h1>
          <input type="text" value={quesState.FF} disabled={quesState.disableFF} onChange={(e) => setQuesState({ ...quesState, FF: (e.target.value).toLowerCase().replace(/\s/g, "") })} />
        </InputAnsDiv>
        <br />
        <InputAnsDiv>
          <h1>II FORM</h1>
          <input type="text" value={quesState.SF} disabled={quesState.disableSF} onChange={(e) => setQuesState({ ...quesState, SF: (e.target.value).toLowerCase().replace(/\s/g, "") })} />
        </InputAnsDiv>
        <br />
        <InputAnsDiv>
          <h1>III FORM</h1>
          <input type="text" value={quesState.TF} disabled={quesState.disableTF} onChange={(e) => setQuesState({ ...quesState, TF: (e.target.value).toLowerCase().replace(/\s/g, "") })} />
        </InputAnsDiv>
        <br /><br />
        <ResetButtonDiv><GlobalButton onClick={checkVerbHandler} width='100px' > {`>`} </GlobalButton></ResetButtonDiv>
      </CompleteAnswer>
    </>
  )
}



export default GlobalStyles;
