import {
    CREATE_COURSE_SUCCESS,
    FETCH_COURSES_SUCCESS,
    UPDATE_COURSE_SUCCESS
} from './actionTypes';
import coursesApi from '../api/mockCourseApi';

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

const updateCourseSuccess = (course) => {
    return {
        type: UPDATE_COURSE_SUCCESS,
        course
    }
};

const createCourseSuccess = (course) => {
    return {
        type: CREATE_COURSE_SUCCESS,
        course
    }
};

export const saveCourse = (course) => {
    return (dispatch) => {
        return coursesApi.saveCourse(course)
            .then(savedCourse => {
                return course.id != null ? dispatch(updateCourseSuccess(savedCourse)) :
                    dispatch(createCourseSuccess(savedCourse))
            }).catch(error => {
                throw(error)
            })
    }
};