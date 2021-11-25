import {
    INCREASE_LESSON,
    INCREASE_MISTAKE,
    INCREASE_QUESTION,
    INCREASE_TOTALXP,
    RESET_CORRECT,
    RESET_LESSON,
    RESET_QUESTION,
    RESET_TOTALXP,
    SHOWMODAL_FALSE
} from '../constants/gameConstants'


export const totalXPReducer = (state = { totalXP: JSON.parse(localStorage.getItem('totalXP')), correctQ: 0 }, action) => {
    switch (action.type) {
        case INCREASE_TOTALXP: return {
            totalXP: state.totalXP + action.payload,
            correctQ: state.correctQ + 1
        }
        case RESET_CORRECT: return {
            ...state,
            correctQ: 0
        }
        case RESET_TOTALXP: return {
            totalXP: 0
        }
        default: return state
    }
}


export const lessonReducer = (state = { lessonNo: JSON.parse(localStorage.getItem('lessonNo')), completedLesson: JSON.parse(localStorage.getItem('completedLesson')), showModal: false }, action) => {
    switch (action.type) {
        case INCREASE_LESSON:
            return {
                ...state,
                completedLesson: [...state.completedLesson, state.lessonNo],
                lessonNo: state.lessonNo + 1,
                showModal: true,

            }
        case RESET_LESSON:
            return {
                ...state,
                lessonNo: 1,
                completedLesson: [],
                showModal: false,
            }
        case SHOWMODAL_FALSE:
            return {
                ...state,
                showModal: false
            }
        default:
            return state

    }
}



export const questionReducer = (state = { questionNo: 1, mistakes: 0 }, action) => {
    switch (action.type) {
        case INCREASE_QUESTION: return {
            ...state,
            questionNo: state.questionNo + 1,

        }
        case RESET_QUESTION: return {
            questionNo: 1,
            mistakes: 0
        }
        case INCREASE_MISTAKE: return {
            ...state,
            mistakes: state.mistakes + 1
        }
        default: return state
    }
}

