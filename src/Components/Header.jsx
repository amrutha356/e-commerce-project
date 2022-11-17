import { Link } from "react-router-dom";



const Header = () => {
    return (  
          <div className=" nav-2 navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="">
                <ul className="list-unstyled d-flex justify-content-space-evenly header-li">
                    <li>
                        <Link to="/">All</Link>
                    </li>
                    <li><a href="/">Best Sellers</a></li>
                    <li><a href="/">Today's Deal</a></li>
                    <li><a href="">Fashion</a></li>
                    <li><Link to="/">Mobiles</Link></li>
                    <li><a href="">Home & Kitchen</a></li>
                    <li><a href="">Books</a></li>
                    <li><a href="">Electronics</a></li>
                    <li><a href="">Customer Service</a></li>
                </ul>
            </div>
          </div>
    );
}
 
export default Header;