import React from 'react';
import {connect} from 'react-redux';
import CourseForm from "./CourseForm";
import PropTypes from 'prop-types';

class ManageCoursePage extends React.Component {

    static propTypes = {
        course: PropTypes.object.isRequired,
        allAuthors: PropTypes.array
    };

    state = {
        course: Object.assign({}, this.props.course),
        errors: {}
    };

    render() {
        return (
            <div>
                <h1>Manage Course</h1>
                <CourseForm
                    allAuthors={this.props.allAuthors}
                    course={this.state.course}
                    onSave={() => {
                    }}
                    errors={this.state.errors}
                />
            </div>
        );
    }

}

const mapStateTorProps = state => ({
    course: state.course,
    allAuthors: state.allAuthors
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateTorProps,
    mapDispatchToProps
)(ManageCoursePage);