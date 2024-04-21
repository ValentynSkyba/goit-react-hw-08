import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

function AuthNav() {
  return (
    <div className={s.container}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
}

export default AuthNav;
