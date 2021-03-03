import React from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from 'redux-form';
import {required, minLengthCreator, email, passwordsMustMatch} from "../utils/validators";
import './steps.scss';

import {update, load, setCurrentPage} from "../../redux/reducers";
import {Input} from "../utils/FormControls";
import {useHistory} from "react-router-dom";

const emailValidations = [required, email];
const passwordValidations = [required, minLengthCreator(1), passwordsMustMatch];

const Form1 = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <div className="label">Email</div>
                <Field className="field"
                       placeholder="E-mail"
                       name={"email"}
                       validate={emailValidations}
                       component={Input}/>
            </div>
            <div>
                <div className="label">Password</div>
                <Field className="field"
                       placeholder="Password"
                       type="password"
                       name={"password"}
                       validate={passwordValidations}
                       component={Input}/>
            </div>
            <div>
                <div className="label">Password confirm</div>
                <Field className="field"
                       placeholder="Confirm password"
                       type="password"
                       name={"confirmPassword"}
                       validate={passwordValidations}
                       component={Input}/>
            </div>
            <button>
                NEXT
            </button>
        </form>
    )
}

let Form1Redux = reduxForm({form: 'step1'})(Form1);

Form1Redux = connect(state => ({
        initialValues: state.data
    }),
    {load}
)(Form1Redux)

const Step1 = (props) => {

    const history = useHistory();

    const onSubmit = (formData) => {
        props.update(formData);
        props.setCurrentPage(2);
        history.push('/step2');
    }
    return <Form1Redux onSubmit={onSubmit} {...props}/>
}


export default connect(null , {update, setCurrentPage})(Step1);
