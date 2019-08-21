import React from "react";
import { Form, Feild, withFormik } from "formik";
// import axios from "axios";

const UserForm = () => {

    return (
        <>
        </>
    );
};

// const FormikHOC = withFormik({}); //this just renames the withFormic function
// const UserFormWithFormik = FormikHOC({})(UserForm); //and now we apply it to the thing we want to export
// export default UserFormWithFormik;
//this process is consolidated into the following line:

export default withFormik({})(UserForm);