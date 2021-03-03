import React from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from 'redux-form';
import './steps.scss';

import {update, load, setCurrentPage} from "../../redux/reducers";
import {useHistory} from "react-router-dom";

const Form3 = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <div className="label">Category 1</div>
                <Field className="option" name="cat1" component="select">
                    <option value="#ff0000">Red</option>
                    <option value="#00ff00">Green</option>
                    <option value="#0000ff">Blue</option>
                </Field>
            </div>
            <div>
                <div className="label">Category 2</div>
                <Field className="option" name="cat2" component="select">
                    <option value="#ff0000">Red</option>
                    <option value="#00ff00">Green</option>
                    <option value="#0000ff">Blue</option>
                </Field>
            </div>
            <div>
                <div className="label">Category 3</div>
                <Field className="option" name="cat3" component="select">
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


export default connect(null, {update, setCurrentPage})(Step3);
