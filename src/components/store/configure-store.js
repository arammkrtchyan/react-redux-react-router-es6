import {createStore, applyMiddleware} from 'redux';
import courseApp from '../reducers/index';
import thunk from 'redux-thunk';

const configureStore = (initialState) => {
    return createStore(
        courseApp,
        initialState,
        applyMiddleware(thunk)
    );
};

export default configureStore;