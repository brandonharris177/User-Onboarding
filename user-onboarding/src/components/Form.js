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
                <Field component = "input" type = "checkbox" name = "termsOfService" />
                <button>Submit</button>
            </Form>
        </div>
    );
};

const formikHOC = withFormik({//this renames and assigns value to the withFormic function
    mapPropsToValues({name, email, password, termsOfService}) {
        return {
            name: name || "",
            name: email || "",
            name: password || "",
            termsOfService: termsOfService || false
        };
    }
});
    
const UserFormWithFormik = formikHOC(UserForm); //this uses the above formik form plus adding in the original UserForm to a user form with formik that we then export.
export default UserFormWithFormik;
//this process is consolidated into the following line but I do not understand how to add yup functionality if we do not include the above lines:

// export default withFormik({})(UserForm);