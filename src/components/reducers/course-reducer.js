import {
    CREATE_COURSE,
    CREATE_COURSE_SUCCESS,
    FETCH_COURSES_SUCCESS,
    UPDATE_COURSE_SUCCESS
} from '../actions/actionTypes';

const initialState = [];

const courses = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_COURSE_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.course)
            ];
        case UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter(course => course.id !== action.course.id),
                Object.assign({}, action.course)
            ];
        case FETCH_COURSES_SUCCESS:
            return action.courses;
        default:
            return state
    }
};

export default courses;