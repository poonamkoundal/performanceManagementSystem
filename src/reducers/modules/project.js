/*
 * @file: project.js
 * @description: Reducers and actions for store/manipulate projects's  data
 * @date: 25/11/2019
 * @author: 
*/

import * as TYPE from '../../actions/constants';

/******** Reducers ********/

const initialState = {
    records: [],
    total: 0,
    limit: 10
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TYPE.GET_PROJECT:
            return { ...state, ...action.data };
        case TYPE.LOG_OUT:
            return initialState;
        case TYPE.DELETE_PROJECT: {
            const index = state.records.findIndex(x => x._id === action.data.userId);
            state.records.splice(index, 1);
            return { ...state, records: [...state.records] };
        }
        default:
            return state;
    }
}
