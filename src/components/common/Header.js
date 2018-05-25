import React from 'react';
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types';
import LoadSpinner from "./LoadSpinner";

const Header = (props) => {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            {' | '}
            <NavLink to="/courses">Courses</NavLink>
            {' | '}
            <NavLink to="/about">About</NavLink>
            {props.loading && <LoadSpinner/>}
        </nav>
    );
};

Header.propTypes = {
    loading: PropTypes.bool
};

export default Header;