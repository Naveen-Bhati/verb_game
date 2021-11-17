import React, { useState } from 'react'
import styled from 'styled-components'
import { GlobalButton, Question } from '../GlobalStyle'
import HOCMain from '../hoc/HOCMain'


export const MCQdiv = styled.div`
display: flex;
flex-direction: column;
`
export const MCQinner = styled.div`
display: flex;
justify-content: space-between;
`



const EasyLevelPage = () => {
    var k = ["beat", "beat", "beaten", "become", "became", "become", "begin", "began", "begun", "bend", "bent", "bent", "bet", "bet", "bet", "bite", "bit", "bitten", "bleed", "bled", "bled", "blow", "blew", "blown", "break", "broke", "broken", "breed", "bred", "bred", "bring", "brought", "brought", "build", "built", "built", "burn", "burnt ", "burnt ", "buy", "bought", "bought", "catch", "caught", "caught", "choose", "chose", "chosen", "come", "came", "come", "cost", "cost", "cost", "cut", "cut", "cut", "do ", "did", "done", "dig", "dug", "dug", "draw", "drew", "drawn", "dream", "dreamt ", "dreamt ", "drink", "drank", "drunk", "drive", "drove", "driven", "eat", "ate", "eaten", "fall", "fell", "fallen", "feed", "fed", "fed", "feel", "felt", "felt", "fight", "fought", "fought", "find", "found", "found", "fly", "flew", "flown", "forget", "forgot", "forgotten", "forgive", "forgave", "forgiven", "freeze", "froze", "frozen", "get", "got", "got", "give", "gave", "given", "go", "went", "gone", "grow", "grew", "grown", "have", "had", "had", "hear", "heard", "heard", "hide", "hid", "hidden", "hit", "hit", "hit", "hold", "held", "held", "hurt", "hurt", "hurt", "keep", "kept", "kept", "know", "knew", "known", "lay", "laid", "laid", "lead", "led", "led", "lean", "leant", "leant", "leave", "left", "left", "lend", "lent", "lent", "let", "let", "let", "lose", "lost", "lost", "make", "made", "made", "mean", "meant", "meant", "meet", "met", "met", "pay", "paid", "paid", "put", "put", "put", "quit", "quit", "quit", "read", "read", "read", "ride", "rode", "ridden", "ring", "rang", "rung", "rise", "rose", "risen", "run", "ran", "run", "say", "said", "said", "see", "saw", "seen", "sell", "sold", "sold", "send", "sent", "sent", "set", "set", "set", "shake", "shook", "shaken", "shine", "shone", "shone", "shoe", "shod", "shod", "shoot", "shot", "shot", "show", "showed", "shown", "shrink", "shrank", "shrunk", "shut", "shut", "shut", "sing", "sang", "sung", "sink", "sank", "sunk", "sit", "sat", "sat", "sleep", "slept", "slept", "speak", "spoke", "spoken", "spend", "spent", "spent", "spill", "spilt", "spilt ", "spread", "spread", "spread", "speed", "sped", "sped", "stand", "stood", "stood", "steal", "stole", "stolen", "stick", "stuck", "stuck", "sting", "stung", "stung", "stink", "stank", "stunk", "swear", "swore", "sworn", "sweep", "swept", "swept", "swim", "swam", "swum", "swing", "swung", "swung", "take", "took", "taken", "teach", "taught", "taught", "tear", "tore", "torn", "tell", "told", "told", "think", "thought", "thought", "throw", "threw", "thrown", "understand", "understood", "understood", "wake", "woke", "woken", "wear", "wore", "worn", "win", "won", "won", "write", "wrote", "written"];

    let verb_data = []

    for (let i = 0; i < k.length;) {
        verb_data.push([k[i], k[i + 1], k[i + 2]])
        i = i + 3
    }

    const rand = Math.floor(Math.random() * (verb_data.length))
    const [easy, setEasy] = useState(verb_data[rand][0])
    console.log(easy, rand);
    const whichForm = Math.ceil(Math.random() * 2) + 1
    const ans = verb_data[rand][whichForm - 1]
    console.log(ans, rand, whichForm);


    const opt1 = k[Math.floor(Math.random() * 318)]
    const opt2 = k[Math.floor(Math.random() * 318)]
    const opt3 = k[Math.floor(Math.random() * 318)]

    const randomArr = [opt1, opt2, opt3, ans]

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;

        } return array
    };
    const finArr = shuffleArray(randomArr)

    const checkAnsHandler = (e) => {
        if (e.target.value === ans) {
            alert("answer is correct")
        } else {
            alert("incorrect answer")
        }
    }


    return (
        <HOCMain>
            <Question>Q1. What is the {whichForm} form of {easy} ? </Question>
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
    )
}

export default EasyLevelPage
