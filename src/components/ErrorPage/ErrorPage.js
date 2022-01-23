import { Link } from "react-router-dom";
import Error from "../../images/2.png";
import styles from "./ErrorPage.module.css";

export function ErrorPage() {
  return (
    <div className={`${styles.message}`}>
      <img src={Error} alt="error" />
      <p>
        This listing has an error. <br />
        <Link to="/">Click here </Link>to go back to home page.
      </p>
    </div>
  );
}
