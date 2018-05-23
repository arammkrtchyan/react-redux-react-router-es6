import {combineReducers} from 'redux';
import courses from './course-reducer'
import authors from './authorReducer'

const courseApp = combineReducers({
    courses,
    authors
});

export default courseApp;