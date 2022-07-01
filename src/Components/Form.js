import { useFormik } from "formik";
const Form = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log("form data", values);
  };
  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log("form errors", formik.errors);

  return (
    <>
      <div className="main">
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name ? (
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
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? (
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
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}

              <br />
            </div>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Form;
