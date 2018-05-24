import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import CourseList from './CourseList';
import {withRouter} from 'react-router';

class CoursesPage extends React.Component {

    static propTypes = {
        courses: PropTypes.array.isRequired,
    };

    handleAddCourseClick = () => {
        this.props.history.push('/course');
    };

    render() {
        return (
            <div>
                <h1>Courses Page</h1>
                <button type='submit' className="btn btn-primary" style={{marginBottom: '10px'}}
                        onClick={this.handleAddCourseClick}>
                    Add Course
                </button>
                <CourseList courses={this.props.courses}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    courses: state.courses
});

export default withRouter(connect(
    mapStateToProps
)(CoursesPage));