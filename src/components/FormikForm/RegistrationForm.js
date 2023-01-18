import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./RegistrationForm.css";

const RegistrationForm = (props) => {
  const initialData = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const validation = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  return (
    <div>
      <h2>Registration Form</h2>
      <Formik
        initialValues={initialData}
        validationSchema={validation}
        validateOnMount
        onSubmit={(values) => {
          props.onAdding(values);
        }}
      >
        {(formik) => {
          return (
            <Form>
              <div className="form">
                      <table cellSpacing={10} cellPadding={2}>
                  <tbody>
                    <tr>
                      <td>
                        <label>First Name: </label>
                      </td>
                      <td>
                        <Field name="firstName" type="text" />
                      </td>
                      <td>
                        <ErrorMessage
                          name="firstName"
                          render={(msg) => (
                            <div className="error_color">{msg}</div>
                          )}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Last Name: </label>
                      </td>
                      <td>
                        <Field name="lastName" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Email: </label>
                      </td>
                      <td>
                        <Field name="email" type="text" />
                      </td>
                      <td>
                        <ErrorMessage
                          name="email"
                          render={(msg) => (
                            <div className="error_color">{msg}</div>
                          )}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button type="submit" disabled={!formik.isValid}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
