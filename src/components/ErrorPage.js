import { Link } from "react-router-dom";
import Error from "../images/2.png";

export function ErrorPage() {
  return (
    <div className="error-message">
      <img src={Error} alt="error" />
      <p>
        This listing has an error. <br />
        <Link to="/">Click here </Link>to go back to home page.
      </p>
    </div>
  );
}
