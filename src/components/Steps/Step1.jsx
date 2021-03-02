import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from 'redux-form';
import {required, minLengthCreator, email, passwordsMustMatch} from "../utils/validators";
import './steps.scss';

import {updateData} from "../../redux/reducers";
import {Input} from "../utils/FormControls";

const val1 = [required, email];
const val2 = [required, minLengthCreator(8), passwordsMustMatch];

const Form1 = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div className="label">Email</div>
                <Field className="field"
                       placeholder={props.email ? props.email : "E-mail"}
                       name={"email"}
                       validate={val1}
                       component={Input}/>
            </div>
            <div>
                <div className="label">Password</div>
                <Field className="field"
                       placeholder={props.password ? props.password : "Password"}
                       type="password"
                       name={"password"}
                       validate={val2}
                       component={Input}/>
            </div>
            <div>
                <div className="label">Password confirm</div>
                <Field className="field"
                       placeholder={props.confirmPassword
                           ? props.confirmPassword
                           : "Confirm password"}
                       type="password"
                       name={"confirmPassword"}
                       validate={val2}
                       component={Input}/>
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
