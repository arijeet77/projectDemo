import { Link } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <header className="navBar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/registration">Registration Form</Link>
          </li>
          <li>
            <Link to="/details">Details</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
