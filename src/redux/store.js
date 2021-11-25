import { applyMiddleware, createStore } from 'redux'
import { } from 'react-redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const totalXPFromStorage = localStorage.getItem('totalXP')
    ? JSON.parse(localStorage.getItem('totalXP')) : 0
const currentLessonNOFromStorage = localStorage.getItem('lessonNo')
    ? JSON.parse(localStorage.getItem('lessonNo')) : 1
const completedLessonFromStorage = localStorage.getItem('completedLesson')
    ? JSON.parse(localStorage.getItem('completedLesson')) : []
const allVerbArrFromStorage = localStorage.getItem('allVerbArr')
    ? JSON.parse(localStorage.getItem('allVerbArr')) : ["beat", "beat", "beaten", "become", "became", "become", "begin", "began", "begun", "bend", "bent", "bent", "bet", "bet", "bet", "bite", "bit", "bitten", "bleed", "bled", "bled", "blow", "blew", "blown", "break", "broke", "broken", "breed", "bred", "bred", "bring", "brought", "brought", "build", "built", "built", "burn", "burnt ", "burnt ", "buy", "bought", "bought", "catch", "caught", "caught", "choose", "chose", "chosen", "come", "came", "come", "cost", "cost", "cost", "cut", "cut", "cut", "do ", "did", "done", "dig", "dug", "dug", "draw", "drew", "drawn", "dream", "dreamt ", "dreamt ", "drink", "drank", "drunk", "drive", "drove", "driven", "eat", "ate", "eaten", "fall", "fell", "fallen", "feed", "fed", "fed", "feel", "felt", "felt", "fight", "fought", "fought", "find", "found", "found", "fly", "flew", "flown", "forget", "forgot", "forgotten", "forgive", "forgave", "forgiven", "freeze", "froze", "frozen", "get", "got", "got", "give", "gave", "given", "go", "went", "gone", "grow", "grew", "grown", "have", "had", "had", "hear", "heard", "heard", "hide", "hid", "hidden", "hit", "hit", "hit", "hold", "held", "held", "hurt", "hurt", "hurt", "keep", "kept", "kept", "know", "knew", "known", "lay", "laid", "laid", "lead", "led", "led", "lean", "leant", "leant", "leave", "left", "left", "lend", "lent", "lent", "let", "let", "let", "lose", "lost", "lost", "make", "made", "made", "mean", "meant", "meant", "meet", "met", "met", "pay", "paid", "paid", "put", "put", "put", "quit", "quit", "quit", "read", "read", "read", "ride", "rode", "ridden", "ring", "rang", "rung", "rise", "rose", "risen", "run", "ran", "run", "say", "said", "said", "see", "saw", "seen", "sell", "sold", "sold", "send", "sent", "sent", "set", "set", "set", "shake", "shook", "shaken", "shine", "shone", "shone", "shoe", "shod", "shod", "shoot", "shot", "shot", "show", "showed", "shown", "shrink", "shrank", "shrunk", "shut", "shut", "shut", "sing", "sang", "sung", "sink", "sank", "sunk", "sit", "sat", "sat", "sleep", "slept", "slept", "speak", "spoke", "spoken", "spend", "spent", "spent", "spill", "spilt", "spilt ", "spread", "spread", "spread", "speed", "sped", "sped", "stand", "stood", "stood", "steal", "stole", "stolen", "stick", "stuck", "stuck", "sting", "stung", "stung", "stink", "stank", "stunk", "swear", "swore", "sworn", "sweep", "swept", "swept", "swim", "swam", "swum", "swing", "swung", "swung", "take", "took", "taken", "teach", "taught", "taught", "tear", "tore", "torn", "tell", "told", "told", "think", "thought", "thought", "throw", "threw", "thrown", "understand", "understood", "understood", "wake", "woke", "woken", "wear", "wore", "worn", "win", "won", "won", "write", "wrote", "written"]
let structuredVerbArrFromStorage = []

for (let i = 0; i < allVerbArrFromStorage.length;) {
    structuredVerbArrFromStorage.push([allVerbArrFromStorage[i], allVerbArrFromStorage[i + 1], allVerbArrFromStorage[i + 2]])
    i = i + 3
}

export { structuredVerbArrFromStorage };

const initialState = {
    allVerbArr: allVerbArrFromStorage,
    structuredVerbArr: structuredVerbArrFromStorage,
    totalXP: totalXPFromStorage,
    lessonNo: currentLessonNOFromStorage,
    completedLesson: completedLessonFromStorage
}



const middleware = [thunk]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
export default store