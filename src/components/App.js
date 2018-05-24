import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Router, Route} from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import createBrowserHistory from 'history/createBrowserHistory'
import Header from "./common/Header";
import CoursesPage from "./course/CoursesPage";
import ManageCoursePage from "./course/ManageCoursePage";

const history = createBrowserHistory();

class App extends Component {

    render() {
        return (
            <Router history={history}>
                <div className="container-fluid" id="app">
                    <Header/>
                    <Main>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/about' component={AboutPage}/>
                        <Route exact path='/courses' component={CoursesPage}/>
                        <Route path='/course/:id' component={ManageCoursePage}/>
                        <Route exact path='/course' component={ManageCoursePage}/>
                    </Main>
                </div>
            </Router>
        );
    }

}

class Main extends Component {

    static propTypes = {
        children: PropTypes.node.isRequired
    };

    render() {
        return (<div>
            {this.props.children}
        </div>);
    }

}

export default App;
