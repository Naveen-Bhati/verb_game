import { combineReducers } from "redux";
import { lessonReducer, questionReducer, totalXPReducer } from "./gameReducers";

const rootReducer = combineReducers({
    totalXPreducer: totalXPReducer,
    lessonreducer: lessonReducer,
    questionreducer: questionReducer,

})

export default rootReducer;
