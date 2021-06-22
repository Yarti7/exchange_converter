import {combineReducers, createStore} from "redux";
import converterReducer from "./converter-reducers";
import courseReducer from "./course-reducers";


let reducers = combineReducers({
    converterPage:  converterReducer,
    coursePage: courseReducer,
});


const store = createStore(reducers);

window.___store___ = store;

export default store;
