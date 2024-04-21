import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={s.error}>
      <h1 className="title-error">Page not found 404</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFoundPage;
