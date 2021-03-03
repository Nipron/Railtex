//Всё в одном файле для упрощения
//В реале всё, естественно, разносим по папкам

import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const UPDATE = "UPDATE";
const LOAD = "LOAD";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initialData = {
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    city: '',
    address: '',
    cat1: '',
    cat2: '',
    cat3: '',
    currentPage: 1
}

export const update = data => {
    return ({type: UPDATE, payload: data})
}

export const load = data => ({type: LOAD, payload: data})

export const setCurrentPage = currentPage => {
    return ({type: SET_CURRENT_PAGE, payload: currentPage})
}

const dataReducer = (state = initialData, action) => {
    switch (action.type) {
        case UPDATE:
            return {...state, ...action.payload};
        case LOAD:
            return {data: action.payload}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload};
        default:
            return state;
    }
}

const reducers = combineReducers({
    data: dataReducer,
    form: formReducer
})

export default reducers;
