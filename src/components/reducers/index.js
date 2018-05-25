import {combineReducers} from 'redux';
import courses from './course-reducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const courseApp = combineReducers({
    courses,
    authors,
    ajaxCallsInProgress
});

export default courseApp;