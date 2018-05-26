import mockAuthorApi from '../api/mockAuthorApi'
import {FETCH_AUTHOR_SUCCESS} from "./actionTypes";
import {ajaxCallError, beginAjaxCall} from "./ajaxStatusActions";

export const loadAuthors = () => {
    return (dispatch) => {
        dispatch(beginAjaxCall());
        mockAuthorApi.getAllAuthors().then(authors =>
            dispatch({type: FETCH_AUTHOR_SUCCESS, authors})
        ).catch(error => {
            dispatch(ajaxCallError());
            throw(error);
        })
    }
};
