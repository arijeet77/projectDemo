import { Link, Outlet } from "react-router-dom";

const Books = () => {
  return (
    <div>
      <h1> Welcome to Books Section</h1>
      <ol>
        <li>
          <Link to="/products/books/1">
            Sapiens: A Brief History of Humankind
          </Link>
        </li>
        <li>
          <Link to="/products/books/2">Wings of Fire</Link>
        </li>
        <li>
          <Link to="/products/books/3">Thinking, Fast and Slow</Link>
        </li>
        <li>
          <Link to="/products/books/4">The Blue Umbrella</Link>
        </li>
        <li>
          <Link to="/products/books/5">The 48 Laws of Power</Link>
        </li>
      </ol>
      <Outlet />
    </div>
  );
};

export default Books;
