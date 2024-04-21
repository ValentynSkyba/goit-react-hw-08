import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

function Navigation() {
  return (
    <div className={s.home}>
      <NavLink to="/">Home</NavLink>
    </div>
  );
}

export default Navigation;
