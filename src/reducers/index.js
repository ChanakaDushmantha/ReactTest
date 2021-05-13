import { combineReducers } from "redux";
import reducerAllPost from "./reducerAllPost";

const rootReducer = combineReducers({
    allPost:reducerAllPost
})

export default rootReducer;