//Всё в одном файле для упрощения

import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const UPDATE = "UPDATE";

let initialData = {
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    city: '',
    address: '',
    cat1: '',
    cat2: '',
    cat3: ''
}

export const updateData = (data) => {
    return ({type: UPDATE, payload: data})
}

const dataReducer = (state = initialData, action) => {
    switch (action.type) {
        case UPDATE:
            return {...state, ...action.payload};
        default:
            return state;
    }
}

const reducers = combineReducers({
    data: dataReducer,
    form: formReducer
})

export default reducers;
