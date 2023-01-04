import { Link, Outlet } from 'react-router-dom';
import "./Products.css"

const Products = () => {
    return (
      <div className='topBar'>
        <ul>
          <li>
            <Link to="/products/books">Books</Link>
          </li>
          <li>
            <Link to="/products/furnitures">Furnitures</Link>
          </li>
        </ul>
        <Outlet/>
      </div>
    );
};

export default Products;
