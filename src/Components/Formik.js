import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
const Formiks = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log("form data", values);
  };
  // const validate = (values) => {
  //   let errors = {};
  //   if (!values.name) {
  //     errors.name = "Name is required";
  //   }
  //   if (!values.email) {
  //     errors.email = "Email is required";
  //   }
  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   }
  //   return errors;
  // };

  const validationSchema = yup.object({
    name: yup.string().required("required!"),
    email: yup.string().email("invalid email format").required("required!"),
    password: yup.string().required("required!"),
  });

  //   console.log("form errors", formik.errors);
  //   console.log("visitd fields");
  return (
    <>
      <Formik
        className="main"
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />

            <ErrorMessage name="name" />
            <br />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field type="text" id="email" name="email" />
            <ErrorMessage name="email" />
            <br />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />

            <ErrorMessage name="password" />
            <br />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default Formiks;
