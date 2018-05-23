import React from 'react';
import {connect} from 'react-redux';
import {createCourse} from '../actions/course-actions'
import PropTypes from 'prop-types';
import CourseList from './CourseList';

class CoursesPage extends React.Component {

    static propTypes = {
        courses: PropTypes.array.isRequired,
    };

    render() {
        return (
            <div>
                <h1>Courses Page</h1>
                <CourseList courses={this.props.courses}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    courses: state.courses
});

const mapDispatchToProps = dispatch => ({
    onSaveActionClick: course => dispatch(createCourse(course))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CoursesPage);