import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const CourseList = (props) => {

    let {
        courses
    } = props;

    return (
        <table className="table">
            <thead>
            <tr>
                <th>{''}</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Length</th>
            </tr>
            </thead>
            <tbody>
            {
                courses.map(course =>
                    (<CourseListRow key={course.id} course={course}/>)
                )
            }
            </tbody>
        </table>
    );

};

CourseList.propTypes = {
    courses: PropTypes.array.isRequired
};


const CourseListRow = (props) => {
    let {
        id,
        title,
        watchHref,
        authorId,
        length,
        category,
    } = props.course;
    return (
        <tr>
            <td>
                <a href={watchHref} target="_blank">Watch</a>
            </td>
            <td>
                <Link to={`courses/${id}`}>{title}</Link>
            </td>
            <td>{authorId}</td>
            <td>{category}</td>
            <td>{length}</td>
        </tr>
    );
};

CourseListRow.propTypes = {
    course: PropTypes.object.isRequired
};

export default CourseList;