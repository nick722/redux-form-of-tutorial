import React from 'react';
import {  Field, reduxForm } from 'redux-form';

const SimpleForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <div>
                    <Field
                        name="firstName"
                        component="input"
                        type="text"
                        placeholder="First Name"
                    />
                </div>
            </div>

            <div>
                <label>
                    <Field
                        name="sex"
                        component="input"
                        type="radio"
                        value="male"
                    />{' '}
                    Male
                </label>
                <label>
                    <Field
                        name="sex"
                        component="input"
                        type="radio"
                        value="female"
                    />{' '}
                    Female
                </label>
            </div>

            <div>
                <button type="submit" disabled={pristine || submitting}>
                    Submit
                </button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>

        </form>
    )
}

export default reduxForm({
    form: 'simple' // a unique identifief for this form
})(SimpleForm)