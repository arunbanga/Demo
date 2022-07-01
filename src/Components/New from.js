import { useFormik } from "formik";
import * as yup from "yup";
const NewForm = () => {
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

  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });
  console.log("form errors", formik.errors);
  console.log("visitd fields", formik.touched);
  return (
    <>
      <div className="main">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              {...formik.getFieldProps("name")}
            />

            {formik.touched.name && formik.errors.name ? (
              <div style={{ color: "red" }}>{formik.errors.name}</div>
            ) : null}
            <br />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              {...formik.getFieldProps("email")}
            />

            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
            <br />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              {...formik.getFieldProps("password")}
            />

            {formik.touched.password && formik.errors.password ? (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}
            <br />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default NewForm;
