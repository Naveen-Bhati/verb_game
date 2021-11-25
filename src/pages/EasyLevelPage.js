import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components'
import { GlobalButton, Question } from '../GlobalStyle'
import HOCMain from '../hoc/HOCMain'
import Modal from '../Modal'
import { increaseLesson, increaseQuestion, increaseXP, } from '../redux/actions/gameActions'




export const MCQdiv = styled.div`
display: flex;
flex-direction: column;
`
export const MCQinner = styled.div`
display: flex;
justify-content: space-between;
`



const EasyLevelPage = () => {

    const dispatch = useDispatch()
    const { questionNo } = useSelector(state => state.questionreducer)
    const { showModal } = useSelector(state => state.lessonreducer)
    const [mistakeCount, setMistakeCount] = useState(0)

    var k = ["beat", "beat", "beaten", "become", "became", "become", "begin", "began", "begun", "bend", "bent", "bent", "bet", "bet", "bet", "bite", "bit", "bitten", "bleed", "bled", "bled", "blow", "blew", "blown", "break", "broke", "broken", "breed", "bred", "bred", "bring", "brought", "brought", "build", "built", "built", "burn", "burnt ", "burnt ", "buy", "bought", "bought", "catch", "caught", "caught", "choose", "chose", "chosen", "come", "came", "come", "cost", "cost", "cost", "cut", "cut", "cut", "do ", "did", "done", "dig", "dug", "dug", "draw", "drew", "drawn", "dream", "dreamt ", "dreamt ", "drink", "drank", "drunk", "drive", "drove", "driven", "eat", "ate", "eaten", "fall", "fell", "fallen", "feed", "fed", "fed", "feel", "felt", "felt", "fight", "fought", "fought", "find", "found", "found", "fly", "flew", "flown", "forget", "forgot", "forgotten", "forgive", "forgave", "forgiven", "freeze", "froze", "frozen", "get", "got", "got", "give", "gave", "given", "go", "went", "gone", "grow", "grew", "grown", "have", "had", "had", "hear", "heard", "heard", "hide", "hid", "hidden", "hit", "hit", "hit", "hold", "held", "held", "hurt", "hurt", "hurt", "keep", "kept", "kept", "know", "knew", "known", "lay", "laid", "laid", "lead", "led", "led", "lean", "leant", "leant", "leave", "left", "left", "lend", "lent", "lent", "let", "let", "let", "lose", "lost", "lost", "make", "made", "made", "mean", "meant", "meant", "meet", "met", "met", "pay", "paid", "paid", "put", "put", "put", "quit", "quit", "quit", "read", "read", "read", "ride", "rode", "ridden", "ring", "rang", "rung", "rise", "rose", "risen", "run", "ran", "run", "say", "said", "said", "see", "saw", "seen", "sell", "sold", "sold", "send", "sent", "sent", "set", "set", "set", "shake", "shook", "shaken", "shine", "shone", "shone", "shoe", "shod", "shod", "shoot", "shot", "shot", "show", "showed", "shown", "shrink", "shrank", "shrunk", "shut", "shut", "shut", "sing", "sang", "sung", "sink", "sank", "sunk", "sit", "sat", "sat", "sleep", "slept", "slept", "speak", "spoke", "spoken", "spend", "spent", "spent", "spill", "spilt", "spilt ", "spread", "spread", "spread", "speed", "sped", "sped", "stand", "stood", "stood", "steal", "stole", "stolen", "stick", "stuck", "stuck", "sting", "stung", "stung", "stink", "stank", "stunk", "swear", "swore", "sworn", "sweep", "swept", "swept", "swim", "swam", "swum", "swing", "swung", "swung", "take", "took", "taken", "teach", "taught", "taught", "tear", "tore", "torn", "tell", "told", "told", "think", "thought", "thought", "throw", "threw", "thrown", "understand", "understood", "understood", "wake", "woke", "woken", "wear", "wore", "worn", "win", "won", "won", "write", "wrote", "written"];

    let verb_data = []

    for (let i = 0; i < k.length;) {
        verb_data.push([k[i], k[i + 1], k[i + 2]])
        i = i + 3
    }

    const random = Math.floor(Math.random() * (verb_data.length));
    const form = Math.floor(Math.ceil(Math.random() * 2) + 1);
    const [quesState, setQuesState] = useState({
        rand: random,
        easy: verb_data[random][0],
        ans: verb_data[random][form - 1],
        whichForm: form,
    })



    const opt1 = k[Math.floor(Math.random() * 318)]
    const opt2 = k[Math.floor(Math.random() * 318)]
    const opt3 = k[Math.floor(Math.random() * 318)]

    const randomArr = [opt1, opt2, opt3, quesState.ans]

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        } return array
    };
    const finArr = shuffleArray(randomArr)


    const checkAnsHandler = async (e) => {
        if (e.target.value === quesState.ans) {
            dispatch(increaseXP(100))
        } else {
            setMistakeCount(() => mistakeCount + 1)
        }
        const random2 = Math.floor(Math.random() * (verb_data.length));
        const form2 = Math.ceil(Math.random() * 2) + 1
        setQuesState({
            rand: random2,
            easy: verb_data[random2][0],
            ans: verb_data[random2][form2 - 1],
            whichForm: form2
        })
        dispatch(increaseQuestion())

    }
    if (questionNo > 10) {
        dispatch(increaseLesson())
        setMistakeCount(0)
    }


    const { lessonNo } = useSelector(state => state.lessonreducer)



    return (
        <>
            {showModal && <Modal lessonNo={lessonNo} mistakeCount={mistakeCount} />}
            <HOCMain>
                <Question>Q{questionNo}. What is the {quesState.whichForm} form of {quesState.easy} ? </Question>
                <br /><br />
                <MCQdiv>
                    <MCQinner>
                        <GlobalButton value={finArr[0]} onClick={e => checkAnsHandler(e, "value")} width='350px'>{finArr[0]} </GlobalButton>
                        <GlobalButton value={finArr[1]} onClick={e => checkAnsHandler(e, "value")} width='350px'>{finArr[1]} </GlobalButton>
                    </MCQinner>
                    <br />
                    <MCQinner>
                        <GlobalButton value={finArr[2]} onClick={e => checkAnsHandler(e, "value")} width='350px'>{finArr[2]}</GlobalButton>
                        <GlobalButton value={finArr[3]} onClick={e => checkAnsHandler(e, "value")} width='350px'>{finArr[3]}</GlobalButton>
                    </MCQinner>
                </MCQdiv>
            </HOCMain>
        </>
    )
}

export default EasyLevelPage
