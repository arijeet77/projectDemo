import { Link } from "react-router-dom";
import "./Navigation.css";


const Navigation = () => {
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
            <Link to="/details">Student Details</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
