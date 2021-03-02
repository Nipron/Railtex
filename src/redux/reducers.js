//Всё в одном файле для упрощения

import {combineReducers} from 'redux';

const UPDATE = "UPDATE";

let initialData = {
}

const dataReducer = (data = initialData, action) => {
    switch (action.type) {
        case UPDATE:
            return data;
        default:
            return data;
    }
}

const reducers = combineReducers({
    data: dataReducer
})

export default reducers;
