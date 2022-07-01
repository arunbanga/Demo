import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
const initialValues = {
  name: "",
  email: "",
  password: "",
};
const onSubmit = (values) => {
  console.log("form values", values);
};
const validationSchema = yup.object({
  name: yup.string().required("required"),
  email: yup.string().email("invalid email format").required("required"),
  password: yup.string().required("required"),
});
const Formhandling = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  console.log("form errors", formik.errors);
  console.log("visited values", formik.touched);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              {...formik.getFieldProps("name")}
            />
            {formik.touched && formik.errors.name ? (
              <div style={{ color: "red" }}>{formik.errors.name}</div>
            ) : null}
          </div>
          <br />

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched && formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
          </div>
          <br />

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched && formik.errors.password ? (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Formhandling;
