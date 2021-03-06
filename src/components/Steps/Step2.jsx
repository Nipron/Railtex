import React from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from 'redux-form';
import {required} from "../utils/validators";
import './steps.scss';

import {update, load, setCurrentPage} from "../../redux/reducers";
import {Input} from "../utils/FormControls";
import {useHistory} from "react-router-dom";

const fieldValidations = [required];

const Form2 = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <div className="label">Country</div>
                <Field className="field"
                       placeholder="Country"
                       name={"country"}
                       validate={fieldValidations}
                       component={Input}/>
            </div>
            <div>
                <div className="label">City</div>
                <Field className="field"
                       placeholder="City"
                       name={"city"}
                       validate={fieldValidations}
                       component={Input}/>
            </div>
            <div>
                <div className="label">Address</div>
                <Field className="field"
                       placeholder="Address"
                       name={"address"}
                       validate={fieldValidations}
                       component={Input}/>
            </div>
            <button>
                NEXT
            </button>
        </form>
    )
}

let Form2Redux = reduxForm({form: 'step2'})(Form2);

Form2Redux = connect(state => ({
        initialValues: state.data
    }),
    {load}
)(Form2Redux)

const Step2 = (props) => {

    const history = useHistory();

    const onSubmit = (formData) => {
        props.update(formData);
        props.setCurrentPage(3);
        history.push('/step3');
    }
    return <Form2Redux onSubmit={onSubmit} {...props}/>
}


export default connect(null, {update, setCurrentPage})(Step2);