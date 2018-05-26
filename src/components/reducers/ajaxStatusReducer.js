import {AJAX_CALL_ERROR, BEGIN_AJAX_CALL} from '../actions/actionTypes';

const ajaxCallsInProgress = (state = 0, action) => {
    const type = action.type;
    if (type === BEGIN_AJAX_CALL) {
        return state + 1;
    } else if (type === AJAX_CALL_ERROR || type.substring(type.length - 8) === '_SUCCESS') {
        debugger;
        return state - 1;
    } else {
        return state;
    }
};

export default ajaxCallsInProgress;

