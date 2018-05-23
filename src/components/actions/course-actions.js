import {CREATE_COURSE, FETCH_COURSES_SUCCESS} from './actionTypes';
import coursesApi from '../api/mockCourseApi';

export const createCourse = (course) => {
    return {
        type: CREATE_COURSE,
        course
    };
};

export const loadCourses = () => {
    return dispatch => {
        return coursesApi.getAllCourses()
            .then(courses => {
                dispatch({type: FETCH_COURSES_SUCCESS, courses})
            }).catch(error => {
                throw(error)
            })
    }
};