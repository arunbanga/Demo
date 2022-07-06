import React from "react";
import { useFormik } from "formik";
const Registrationform = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    gender: "",
  };
  const onSubmit = (values) => {
    console.log("form values", values);
    // alert(JSON.stringify(values, null, 2));
  };
  const validate = (values) => {
    let errors = {};
    if (!values.firstname) {
      errors.firstname = "required!";
    }
    if (!values.lastname) {
      errors.lastname = " required!";
    }
    if (!values.email) {
      errors.email = "email required!";
    }
    if (!values.password) {
      errors.password = "required!";
    }
    if (!values.gender) {
      errors.gender = "required!";
    }
    return errors;
  };
  const testgender = (event) => {
    console.log({ event: event.target.currentTarget });
    const target = event.currentTarget.id;
    console.log(target);
    formik.setFieldValue("gender", target);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log("foram data", formik.values);
  console.log("form error", formik.errors);
  return (
    <>
      <div className="w-full justify-center ">
        <p className="text-4xl text-center font-sans text-gray-700 underline underline-offset-2">
          Registration From
        </p>
        <div className="flex justify-center">
          <div className="mt-6 pt-6">
            <form onSubmit={formik.handleSubmit}>
              <div className="flex justify-between mb-3">
                <label htmlFor="firstname" className="mt-2">
                  FirstName:-
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  onChange={formik.handleChange}
                  value={formik.values.firstname}
                  className="px-3 py-2 border-2 border-gray-400 focus-outline:none rounded-md ml-3 text-sm  w-[300px]"
                />
              </div>
              {formik.errors.firstname ? (
                <div style={{ color: "red" }}>{formik.errors.firstname}</div>
              ) : null}
              <div className="flex  justify-between">
                <label htmlFor="lastname" className="mt-2">
                  LastName:-
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  onChange={formik.handleChange}
                  value={formik.values.lastname}
                  className="px-3 py-2 border-2 border-gray-400 focus-outline:none rounded-md ml-3 text-sm  w-[300px]"
                />
              </div>
              {formik.errors.lastname ? (
                <div style={{ color: "red" }}>{formik.errors.lastname}</div>
              ) : null}
              <div className="flex  justify-between mt-3">
                <label htmlFor="Email" className="mt-2">
                  Email:-
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="px-3 py-2 border-2 border-gray-400 focus-outline:none rounded-md ml-3 text-sm  w-[300px]"
                />
              </div>
              {formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
              <div className="flex  justify-between mt-3">
                <label htmlFor="password" className="mt-2">
                  Password:-
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  className="px-3 py-2 border-2 border-gray-400 focus-outline:none rounded-md ml-3 text-sm  w-[300px]"
                />
              </div>
              {formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}
              <div className=" mt-5 flex justify-between w-[240px]">
                <label htmlFor="gender">Gender:-</label>
                <br />
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  onChange={testgender}
                  value={formik.values.gender === "male"}
                />
                <label htmlFor="female">Female</label>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  onChange={testgender}
                  value={formik.values.gender === "female"}
                />
              </div>
              {formik.errors.gender ? (
                <div style={{ color: "red" }}>{formik.errors.gender}</div>
              ) : null}
              <div className=" mt-5 flex justify-between w-[400px]">
                <label htmlFor="gender">Select the Job:-</label>
                <br />
                <input
                  type="checkbox"
                  name="developer"
                  id="job"
                  onChange={formik.handleChange}
                  value={formik.values.Isdeveloper}
                />
                <label htmlFor="developer">Is developer</label>

                <input
                  type="checkbox"
                  name="gamer"
                  id="job"
                  onChange={formik.handleChange}
                  value={formik.values.Isgamer}
                />
                <label htmlFor="gamer">Is gamer</label>

                <input
                  type="checkbox"
                  name="doctor"
                  id="job"
                  onChange={formik.handleChange}
                  value={formik.values.Isdoctor}
                />
                <label htmlFor="doctor">Is doctor</label>
              </div>
              <button
                type="submit"
                className="mt-3 border-2 border-white bg-blue-500 px-5 py-2 rounded-md hover:bg-blue-400"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registrationform;
