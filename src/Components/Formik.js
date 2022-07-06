import { Formik, Form, Field } from "formik";
const Formiks = () => {
  return (
    <>
      <h1>Sign up</h1>
      <Formik
        initialValues={{
          gender: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 50));
          alert(JSON.stringify(values, null, 2));
          console.log("form values", values);
        }}
      >
        {({ values }) => (
          <Form>
            <div>
              <label>
                <Field type="radio" name="gender" value="male" />
                Male
              </label>
              <label>
                <Field type="radio" name="gender" value="female" />
                Female
              </label>
              <div>gender:{values.gender}</div>
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default Formiks;
