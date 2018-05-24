import React from 'react';
import {connect} from 'react-redux';
import CourseForm from "./CourseForm";
import PropTypes from 'prop-types';
import {saveCourse} from "../actions/course-actions";

class ManageCoursePage extends React.Component {

    static propTypes = {
        course: PropTypes.object.isRequired,
        authors: PropTypes.array,
        onSave: PropTypes.func.isRequired
    };

    static contextTypes = {
        router: PropTypes.object
    };

    state = {
        course: Object.assign({}, this.props.course),
        errors: {}
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id !== nextProps.course.id) {
            this.setState({
                course: Object.assign({}, nextProps.course)
            })
        }
    }

    handleCourseUpdate = (event) => {
        let course = this.state.course;
        course[event.target.name] = event.target.value;
        this.setState({course});
    };

    handleCourseFormSubmit = () => {
        this.props.onSave(this.state.course);
        this.context.router.history.push('/courses');
    };

    render() {
        let {
            authors
        } = this.props;
        return (
            <div>
                <h1>Manage Course</h1>
                <CourseForm
                    allAuthors={authors}
                    course={this.state.course}
                    onSave={this.handleCourseFormSubmit}
                    errors={this.state.errors}
                    onChange={this.handleCourseUpdate}
                />
            </div>
        );
    }

}

const findByCourseId = (courses, courseId) => {
    let course = courses.filter(course => course.id === courseId);
    return course.length > 0 ? course[0] : null;
};

const mapStateTorProps = (state, ownProps) => {
    const courseId = ownProps.match.params.id;
    let course;
    if (courseId && state.courses.length > 0) {
        course = findByCourseId(state.courses, courseId);
    } else {
        course = {
            title: "",
            watchHref: "",
            authorId: "",
            length: "",
            category: ""
        };
    }
    return {
        course,
        authors: state.authors.map(author => ({value: author.id, text: `${author.firstName} ${author.lastName}`}))
    }
};

const mapDispatchToProps = dispatch => ({
    onSave: course => dispatch(saveCourse(course))
});

export default connect(
    mapStateTorProps,
    mapDispatchToProps
)(ManageCoursePage);
