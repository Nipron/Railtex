import React from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from 'redux-form';
import './steps.scss';

import {updateData} from "../../redux/reducers";

const Form1 = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div className="label">Email</div>
                <Field className="field"
                       placeholder={props.email ? props.email : "E-mail"}
                       name={"email"}
                       component={"input"}/>
            </div>
            <div>
                <div className="label">Password</div>
                <Field className="field"
                       placeholder={props.password ? props.password : "Password"}
                       name={"password"}
                       component={"input"}/>
            </div>
            <div>
                <div className="label">Password confirm</div>
                <Field className="field"
                       placeholder={props.confirmPassword
                           ? props.confirmPassword
                           : "Confirm password"}
                       name={"confirmPassword"}
                       component={"input"}/>
            </div>
            {/*  <div>
                <Field name="favoriteColor" component="select">
                    <option/>
                    <option value="#ff0000">Red</option>
                    <option value="#00ff00">Green</option>
                    <option value="#0000ff">Blue</option>
                </Field>
            </div>*/}
            <button>
                NEXT
            </button>
        </form>
    )
}

const Form1Redux = reduxForm({form: 'step1'})(Form1);

const Step1 = (props) => {
    const onSubmit = (formData) => {
        props.update(formData);
    }
    return <Form1Redux onSubmit={onSubmit} {...props}/>
}

const mapStateToProps = state => ({
    email: state.data.email,
    password: state.data.password,
    confirmPassword: state.data.confirmPassword
})

const mapDispatchToProps = {
    update: updateData
}

export default connect(mapStateToProps, mapDispatchToProps)(Step1);
