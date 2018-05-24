import {FETCH_AUTHOR_SUCCESS} from '../actions/actionTypes'

const authors = (state = [], action) => {
    switch (action.type) {
        case FETCH_AUTHOR_SUCCESS:
            return action.authors;
        default:
            return state;
    }
};

export default authors;