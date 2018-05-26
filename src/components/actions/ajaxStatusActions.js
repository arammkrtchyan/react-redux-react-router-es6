import {AJAX_CALL_ERROR, BEGIN_AJAX_CALL} from "./actionTypes";

export const beginAjaxCall = () => {
    return {
        type: BEGIN_AJAX_CALL
    }
};

export const ajaxCallError= () => {
    return {
        type: AJAX_CALL_ERROR
    }
};