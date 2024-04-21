import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./RegistrationPage.module.css";

function RegistrationPage() {
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    dispatch(registerThunk(values));
  };
  const initialValues = {
    name: "",
    password: "",
    email: "",
  };
  return (
    <div className="auth-form">
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <label>
            Name
            <Field
              className={s.input}
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <ErrorMessage name="name" component={"p"} className="red" />
          </label>
          <label>
            Email
            <Field
              className={s.input}
              type="text"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component={"p"} className="red" />
          </label>
          <label>
            Password
            <Field
              className={s.input}
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" component={"p"} className="red" />
          </label>

          <button className="btn border" type="submit">
            Register
          </button>
          <p className={s.text}>
            You already have an account? &#32;
            <Link to="/login">Log in</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
}

export default RegistrationPage;
