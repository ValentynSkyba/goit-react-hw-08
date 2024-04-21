import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./LoginPage.module.css";

function LoginPage() {
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    dispatch(loginThunk(values));
  };

  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Form className={s.form}>
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
          Log In
        </button>
        <p>
          Don`t have an account yet? &#32;
          <Link to="/register">Register</Link>
        </p>
      </Form>
    </Formik>
  );
}

export default LoginPage;
