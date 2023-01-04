import { Link, Outlet } from "react-router-dom";

const Furnitures = () => {
  return (
    <div>
      <h1> Welcome to Furniture Section</h1>
      <ol>
        <li>
          <Link to="/products/furnitures/1">Cabinet</Link>
        </li>
        <li>
          <Link to="/products/furnitures/2">Table</Link>
        </li>
        <li>
          <Link to="/products/furnitures/3">Chair</Link>
        </li>
      </ol>
      <Outlet />
    </div>
  );
};

export default Furnitures;
