
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
    <nav className=" nav-1 navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div>
            <img src="" alt="" />
          </div>
          <form className="d-flex " role="search">
            <input className="form-control me-2 w-600" type="search" placeholder="Search for products,mobiles,electronics....................." aria-label="Search" />
          
         
            <button className="btn btn-outline-success w-5" type="submit"><SearchIcon /></button>
            
          </form>
        
          <ul className=" right navbar-nav me-auto mb-2 mb-lg-0 list unstyled">
            <li className=" nav-item ">
              <Link to="/" className='nav1-Link' >Home</Link>
            </li>
            <li>
              <Link to="/signin" className='nav1-Link2'>Sign in</Link>
            </li>
            <li>
              <a className="nav-link-active" aria-current="page" href="/cart"> <AddShoppingCartIcon />Cart</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;