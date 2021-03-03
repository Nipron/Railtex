import React from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from 'redux-form';
import {required} from "../utils/validators";
import './steps.scss';

import {update, load, setCurrentPage} from "../../redux/reducers";
import {Input} from "../utils/FormControls";
import {useHistory} from "react-router-dom";

const fieldValidations = [required];

const Form3 = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <div className="label">Category 1</div>
                <Field className="option" name="cat1" component="select">
                    <option/>
                    <option value="#ff0000">Red</option>
                    <option value="#00ff00">Green</option>
                    <option value="#0000ff">Blue</option>
                </Field>
            </div>
            <div>
                <div className="label">Category 2</div>
                <Field className="option" name="cat2" component="select">
                    <option/>
                    <option value="#ff0000">Red</option>
                    <option value="#00ff00">Green</option>
                    <option value="#0000ff">Blue</option>
                </Field>
            </div>
            <div>
                <div className="label">Category 3</div>
                <Field className="option" name="cat3" component="select">
                    <option/>
                    <option value="#ff0000">Red</option>
                    <option value="#00ff00">Green</option>
                    <option value="#0000ff">Blue</option>
                </Field>
            </div>
            <button>
                NEXT
            </button>
        </form>
    )
}

let Form2Redux = reduxForm({form: 'step3'})(Form3);

Form2Redux = connect(state => ({
        initialValues: state.data
    }),
    {load}
)(Form2Redux)

const Step3 = (props) => {

    const history = useHistory();

    const onSubmit = (formData) => {
        props.update(formData);
        props.setCurrentPage(4);
        history.push('/step4');
    }
    return <Form2Redux onSubmit={onSubmit} {...props}/>
}

const mapStateToProps = state => ({
    email: state.data.email,
    password: state.data.password,
    confirmPassword: state.data.confirmPassword
})

export default connect(mapStateToProps, {update, setCurrentPage})(Step3);
