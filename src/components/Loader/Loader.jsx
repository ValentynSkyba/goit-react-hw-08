import { CirclesWithBar } from "react-loader-spinner";
import s from "./Loader.module.css";

function Loader() {
  return (
    <div className={s.loader}>
      <CirclesWithBar
        height="60"
        width="60"
        color="#4fa94d"
        outerCircleColor="#4fa94d"
        innerCircleColor="#4fa94d"
        barColor="#4fa94d"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
