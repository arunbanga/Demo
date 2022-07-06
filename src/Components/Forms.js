import { useFormik } from "formik";
import * as yup from "yup";
const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  dateofbirth: "",
  test: "",
};
const onSubmit = (values) => {
  console.log("form values", values);
};
const validationSchema = yup.object({
  firstname: yup.string().required("required"),
  lastname: yup.string().required("required"),
  email: yup.string().email("invalid email format").required("required"),
  dateofbirth: yup.string().required("required"),
  test: yup.string().required(),
});
const Forms = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const testFun = (event) => {
    console.log({ event: event.currentTarget });
    event.currentTarget.style.padding = "20px";
    event.currentTarget.style.background = "red";
    const target = event.currentTarget.id;
    console.log({ target });
    formik.setFieldValue("test", target);
  };

  console.log("errors", formik.errors, formik.values);
  return (
    <>
      <div className="w-full flex justify-center mt-6">
        <div>
          <div className="text-4xl text-center font-sans text-gray-700 underline underline-offset-2">
            <p className="text-center">Form</p>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex justify-between mt-11">
              <label htmlFor="firstname" className="mt-2">
                FirstName:
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                className="px-3 py-2 border-2 border-gray-400 focus-outline:none rounded-md ml-3 text-sm w-[300px]"
                onChange={formik.handleChange}
                value={formik.values.firstname}
              />
            </div>
            {formik.errors.firstname ? (
              <div style={{ color: "red" }}>{formik.errors.firstname}</div>
            ) : null}
            <br />

            <div className="flex justify-between">
              <label htmlFor="lastname" className="mt-2">
                LastName:
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                className="px-3 py-2 border-2 border-gray-400 focus-outline:none rounded-md ml-3 text-sm w-[300px]"
                onChange={formik.handleChange}
                value={formik.values.lastname}
              />
            </div>
            {formik.errors.lastname ? (
              <div style={{ color: "red" }}>{formik.errors.lastname}</div>
            ) : null}
            <br />

            <div className="flex justify-between">
              <label htmlFor="email" className="mt-2">
                Email:
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="px-3 py-2 border-2 border-gray-400 focus-outline:none rounded-md ml-3 text-sm w-[300px]"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            {formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
            <br />
            <div>
              <label htmlFor="birthday">Date of birth:</label>
              <input
                type="date"
                name="dateofbirth"
                id="dateofbirth"
                className="px-3 py-2 border-2 border-gray-400 focus-outline:none rounded-md ml-3 text-sm w-[300px]"
                onChange={formik.handleChange}
                value={formik.values.dateofbirth}
              />
              {formik.errors.dateofbirth ? (
                <div style={{ color: "red" }}>{formik.errors.dateofbirth}</div>
              ) : null}
            </div>
            <div style={{ marginTop: "10px" }}>
              <label htmlFor="gender">Gender:</label>

              <div className="flex justify-between w-[150px]">
                <input
                  type="radio"
                  id="male"
                  name="test"
                  onChange={testFun}
                  value={formik.values.test === "male"}
                />

                <label htmlFor="male">Male</label>

                <input
                  type="radio"
                  id="female"
                  name="test"
                  value={formik.values.test === "female"}
                  onChange={testFun}
                />
                <label htmlFor="female">Female</label>
              </div>
              {formik.errors.test ? (
                <div style={{ color: "red" }}>{formik.errors.test}</div>
              ) : null}
            </div>
            <div style={{ marginTop: "10px" }}>
              <label htmlFor="checkbox">Select the Job:</label>
            </div>

            <div
              style={{ marginTop: "10px" }}
              className="flex justify-between w-[300px]"
            >
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
            <button
              type="submit"
              className="px-6 py-2 border-2 rounded-md mt-3 bg-blue-600 text-white hover:bg-blue-400"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Forms;
