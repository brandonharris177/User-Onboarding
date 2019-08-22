import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";

const UserForm = ({errors, touched, values, status}) => {

    const [users, setusers] = useState([]);
    // console.log(users);
    useEffect(() => {
      if (status) {
        setusers([...users, status]);
      }
    }, [status]);

    return (
        <div>
            <Form>
                <Field component = "input" type = "text" name = "name" placeholder = "name"/>
                {touched.name && errors.name &&(
                    <p className = "error">{errors.name}</p>
                )}
                <Field component = "input" type = "email" name = "email" placeholder = "email"/>
                {touched.email && errors.email &&(
                    <p className = "error">{errors.email}</p>
                )}
                <Field component = "input" type = "password" name = "password" placeholder = "password"/>
                {touched.password && errors.password &&(
                    <p className = "error">{errors.password}</p>
                )}
                <label name = "terms-of-service">Terms of service:</label>
                <Field component = "input" type = "checkbox" name = "termsOfService" checked = {values.termsOfService} />
                {errors.termsOfService &&(
                    <p className = "error">{errors.termsOfService}</p>
                )}  
                <button type = "submit">Submit</button>
            </Form>   
            
            {users.map(user => (
        <ul key={user.id}>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
        </ul>
      ))}
        </div>
    );
};

const formikHOC = withFormik({//this renames and assigns value to the withFormic function
    mapPropsToValues({name, email, password, termsOfService}) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            termsOfService: termsOfService || false
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required('Invalid Name'),
        email: Yup.string().email().required('Invalid Email'),
        password: Yup.string().required('Invalid Password'),
        // termsOfService: Yup.required('Terms of Service is Required')
    }),

    handleSubmit(values, {setStatus}) {
        axios
          .post("https://reqres.in/api/users", values)
          .then(response => {
            // console.log(response.data)
            setStatus(response.data);
          })
          .catch(err => console.log(err.response));
      }

});

const UserFormWithFormik = formikHOC(UserForm); //this uses the above formik form plus adding in the original UserForm to a user form with formik that we then export.
export default UserFormWithFormik;
//this process is consolidated into the following line but I do not understand how to add yup functionality if we do not include the above lines:

// export default withFormik({})(UserForm);