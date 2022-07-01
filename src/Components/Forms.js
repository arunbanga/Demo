import { useFormik } from "formik";
import * as yup from "yup";
const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  dateofbirth: "",
};
const onSubmit = (values) => {
  console.log("form values", values);
};
const validationSchema = yup.object({
  firstname: yup.string().required("required"),
  lastname: yup.string().required("required"),
  email: yup.string().email("invalid email format").required("required"),
  dateofbirth: yup.string().required("required"),
});
const Forms = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  console.log("errors", formik.errors);
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "10px" }}
      >
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="firstname">FirstName:</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              onChange={formik.handleChange}
              value={formik.values.firstname}
            />
            {formik.errors.firstname ? (
              <div style={{ color: "red" }}>{formik.errors.firstname}</div>
            ) : null}
          </div>
          <br />

          <div>
            <label htmlFor="lastname">LastName:</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              onChange={formik.handleChange}
              value={formik.values.lastname}
            />
            {formik.errors.lastname ? (
              <div style={{ color: "red" }}>{formik.errors.lastname}</div>
            ) : null}
          </div>
          <br />

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
          </div>
          <br />
          <div>
            <label htmlFor="birthday">Date of birth:</label>
            <input
              type="date"
              name="dateofbirth"
              id="dateofbirth"
              onChange={formik.handleChange}
              value={formik.values.dateofbirth}
            />
            {formik.errors.dateofbirth ? (
              <div style={{ color: "red" }}>{formik.errors.dateofbirth}</div>
            ) : null}
          </div>
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="gender">Gender:</label>

            <div>
              <input
                type="radio"
                id="male"
                name="first"
                onChange={formik.handleChange}
                value={formik.values.first}
              />

              <label htmlFor="Male">Male</label>

              <input
                type="radio"
                id="female"
                name="first"
                onChange={formik.handleChange}
                value={formik.values.Female}
              />
              {formik.errors.first ? (
                <div style={{ color: "red" }}>{formik.errors.first}</div>
              ) : null}
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="checkbox">Select the Job:</label>
          </div>

          <div style={{ marginTop: "10px" }}>
            <input
              type="checkbox"
              name="developer"
              id="second"
              onChange={formik.handleChange}
              value={formik.values.Isdeveloper}
            />

            <label>Is developer</label>

            <input
              type="checkbox"
              name="gamer"
              id="second"
              onChange={formik.handleChange}
              value={formik.values.Isgamer}
            />

            <label>Is gamer</label>
            <input
              type="checkbox"
              name="doctor"
              id="second"
              onChange={formik.handleChange}
              value={formik.values.Isdoctor}
            />
            <label>Is doctor</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
export default Forms;
