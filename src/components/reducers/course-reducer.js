import {CREATE_COURSE, FETCH_COURSES_SUCCESS} from '../actions/actionTypes';

const initialState = [];

const courses = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_COURSE:
            return [
                ...state,
                Object.assign({}, action.course)
            ];
        case FETCH_COURSES_SUCCESS:
            return action.courses;
        default:
            return state
    }
};

export default courses;