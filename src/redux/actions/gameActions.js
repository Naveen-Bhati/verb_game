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
} from "../constants/gameConstants"



export const increaseXP = (increasedXP) => {
    localStorage.setItem('totalXP', JSON.stringify(JSON.parse(localStorage.getItem('totalXP')) + 100))
    return {
        type: INCREASE_TOTALXP,
        payload: increasedXP
    }

}

export const resetTotalXP = () => (dispatch) => {
    localStorage.setItem('totalXP', JSON.stringify(0))
    return dispatch({
        type: RESET_TOTALXP
    })

}

export const increaseLesson = () => (dispatch) => {
    localStorage.setItem('completedLesson', JSON.stringify([...(JSON.parse(localStorage.getItem('completedLesson'))), (JSON.parse(localStorage.getItem('lessonNo')))]))
    localStorage.setItem('lessonNo', JSON.stringify((JSON.parse(localStorage.getItem('lessonNo'))) + 1))
    dispatch({ type: INCREASE_LESSON })
    dispatch({ type: RESET_QUESTION })
    dispatch({ type: RESET_CORRECT })

}
export const setShowModalFalse = () => (dispatch) => {
    return dispatch({
        type: SHOWMODAL_FALSE
    })

}

export const resetLesson = () => (dispatch) => {
    localStorage.setItem('lessonNo', JSON.stringify(1))
    localStorage.setItem('completedLesson', JSON.stringify([]))
    dispatch({ type: RESET_LESSON })
    dispatch({ type: RESET_QUESTION })
    dispatch({ type: RESET_CORRECT })
}


export const increaseQuestion = () => (dispatch) => {
    return dispatch({
        type: INCREASE_QUESTION
    })
}

export const increaseMistake = () => (dispatch) => {
    return dispatch({
        type: INCREASE_MISTAKE
    })
}