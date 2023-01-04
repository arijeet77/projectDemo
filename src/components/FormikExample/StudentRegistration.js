import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ErrorMessageStyle.css";

const StudentRegistration = (props) => {
  const states = [
    {
      name: "Telangana",
      cities: ["Hyderabad", "Secunderabad", "Warangal"],
    },
    {
      name: "Kerala",
      cities: ["Kochi", "Thrissur", "Kozhikode"],
    },
    {
      name: "Rajasthan",
      cities: ["Jaipur", "Jodhpur", "Bikaner"],
    },
  ];

  const initialData = {
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    state: "",
    city: "",
    street: "",
    pin: "",
  };

  const validation = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    pin: Yup.number()
      .min(100000, "Must be 6 digits")
      .max(999999, "Must be 6 digits")
      .required("Required"),
  });

  return (
    <div>
      <h2>Student Registration Form</h2>
      <Formik
        initialValues={initialData}
        validationSchema={validation}
        onSubmit={(values, { resetForm }) => {
          props.onAdding(values);
          resetForm();
        }}
      >
        {({ values }) => (
          <Form>
            <div>
              <label>First Name: </label>
              <Field name="firstName" type="text" />
              <br />
              <ErrorMessage
                name="firstName"
                render={(msg) => <div className="error_color">{msg}</div>}
              />
            </div>
            <div>
              <label>Last Name: </label>
              <Field name="lastName" type="text" />
              <br />
              <ErrorMessage name="lastName" />
            </div>
            <div>
              <label>Email: </label>
              <Field name="email" type="text" />
              <br />
              <ErrorMessage
                name="email"
                render={(msg) => <div className="error_color">{msg}</div>}
              />
            </div>
            <div>
              <label>Date of Birth: </label>
              <Field name="dob" type="date" />
              <ErrorMessage
                name="dob"
                render={(msg) => <div className="error_color">{msg}</div>}
              />
            </div>
            <div>
              <h3>Address: </h3>
              <div>
                <label>State: </label>
                <Field name="state" as="select">
                  <option className="optionStyle">Choose State</option>
                  {states.map((value, key) => (
                    <option key={key}  value={value.name}>{value.name}</option>
                  ))}
                  
                </Field>
                <ErrorMessage name="state" />
              </div>
              <div>
                <label>City: </label>
                <Field name="city" as="select">
                  <option className="optionStyle">Choose City</option>
                  {values.state &&
                    states.map(
                      (value) =>
                        value.name === values.state &&
                        value.cities.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))
                    )}
                </Field>
                <ErrorMessage name="city" />
              </div>
              <div>
                <label>Street: </label>
                <Field name="street" type="text" />
                <ErrorMessage name="street" />
              </div>
              <div>
                <label>Pin Code: </label>
                <Field name="pin" type="number" />
                <br />
                <ErrorMessage
                  name="pin"
                  render={(msg) => <div className="error_color">{msg}</div>}
                />
              </div>
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StudentRegistration;
