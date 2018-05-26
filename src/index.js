import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import configureStore from './components/store/configure-store';
import {Provider} from 'react-redux';
import {loadCourses} from './components/actions/course-actions'
import {loadAuthors} from "./components/actions/authorActions";
import 'toastr/build/toastr.min.css';

const store = configureStore();

store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
