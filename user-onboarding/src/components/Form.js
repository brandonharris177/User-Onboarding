import React from "react";
import { Form, Field, withFormik } from "formik";
// import axios from "axios";

const UserForm = () => {

    return (
        <div>
        <Form>
            <Field component = "input" type = "text" name = "name" placeholder = "name"/>
            <Field component = "input" type = "email" name = "email" placeholder = "email"/>
            <Field component = "input" type = "password" name = "password" placeholder = "password"/>
            <label name = "terms-of-service">Terms of service:</label>
            <Field component = "input" type = "checkbox" name = "terms-of-service" />
            <button>Submit</button>
        </Form>
        </div>
    );
};

// const FormikHOC = withFormik({}); //this just renames the withFormic function
// const UserFormWithFormik = FormikHOC({})(UserForm); //and now we apply it to the thing we want to export
// export default UserFormWithFormik;
//this process is consolidated into the following line:

export default withFormik({})(UserForm);