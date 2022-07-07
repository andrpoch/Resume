import { TailSpin } from "react-loader-spinner";
import s from "./Loader.module.scss";

export default function Loader() {
  return (
        <div className={s.loader}>
      <TailSpin ariaLabel="loading-indicator"
        visible={true}
        color="grey"
        strokeWidth="10"/>
      </div>
  );
}