import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/slice";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import s from "./AppBar.module.css";

function AppBar() {
  const isLogged = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <div className={s.container}>
      <Navigation />
      {isLogged && <h2 className={s.username}>{user.name}</h2>}
      {isLogged ? <UserMenu /> : <AuthNav />}
    </div>
  );
}

export default AppBar;
