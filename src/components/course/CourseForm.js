import React from 'react';
import PropTypes from 'prop-types';

const CourseForm = (props) => {
    let {
        course,
        errors,
        allAuthors,
        loading,
        onSave
    } = props;

    let handleFormSubmit = (event) => {
        event.preventDefault();
        onSave();
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <TextInput
                    value={course.title}
                    label="Title"
                    name="title"
                    onChange={() => {
                    }}
                    error={errors.title}
                />
                <SelectInput
                    name="authorId"
                    label="Author"
                    value={course.authorId}
                    defaultOption="Select Author"
                    options={allAuthors}
                    onChange={() => {
                    }}
                    error={errors.authorId}
                />
                <TextInput
                    value={course.category}
                    label="Category"
                    name="category"
                    onChange={() => {
                    }}
                    error={errors.category}
                />
                <TextInput
                    value={course.length}
                    label="Length"
                    name="length"
                    onChange={() => {
                    }}
                    error={errors.length}
                />
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                >
                    {loading ? 'Saving...' : 'Save'}
                </button>
            </form>
        </div>
    );

};

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    errors: PropTypes.object,
    allAuthors: PropTypes.array.isRequired,
    loading: PropTypes.bool,
    onSave: PropTypes.func.isRequired
};

export default CourseForm;

const TextInput = (props) => {
    let {
        value,
        label,
        name,
        onChange,
        error,
        placeholder
    } = props;
    let wrapperClassName = error && error.length > 0 ?
        'form-group has-error' : 'form-group';
    return (
        <div className={wrapperClassName}>
            <label htmlFor={name}>
                {label}
            </label>
            <div className='field'>
                <input type="text" value={value} name={name} className='form-control'
                       placeholder={placeholder} onChange={event => onChange(event.target.value)}/>
                {error && <div className='alert alert-danger'>{error}</div>}
            </div>
        </div>
    );
};

TextInput.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    placeholder: PropTypes.string
};

const SelectInput = (props) => {
    let {
        options,
        name,
        label,
        onChange,
        error,
        value,
        defaultOption
    } = props;
    let wrapperClassName = error && error.length > 0 ?
        'form-group has-error' : 'form-group';
    return (
        <div className={wrapperClassName}>
            <label htmlFor={name}>{label}</label>
            <div className='field'>
                <select
                    name={name}
                    onChange={event => onChange(event.target.value)}
                    value={value}
                    className="form-control"
                >
                    {defaultOption && <option value="">{defaultOption}</option>}

                    {
                        options.map(option => (
                            <option key={option.value} value={option.value}>{option.text}</option>
                        ))
                    }
                </select>
                {error && <div className='alert alert-danger'>{error}</div>}
            </div>
        </div>
    );
};

SelectInput.propTypes = {
    options: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    value: PropTypes.string,
    defaultOption: PropTypes.string
};