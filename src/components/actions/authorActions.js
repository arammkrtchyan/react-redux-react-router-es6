import mockAuthorApi from '../api/mockAuthorApi'
import {FETCH_AUTHOR_SUCCESS} from "./actionTypes";

export const loadAuthors = () => {
    return (dispatch) => {
        mockAuthorApi.getAllAuthors().then(authors =>
            dispatch({type: FETCH_AUTHOR_SUCCESS, authors})
        ).catch(error => {
            throw(error());
        })
    }
};