import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <header>
            <div className="navbar">
                <div className="navbar-logo">
                    Data-Visualisation
                </div>
                <div className="navbar-content">
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to="/account">Account</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </div>
                <div className="search-input">
                    <form>
                        <input type="text" placeholder="   Search Country" />
                        <button>Search</button>
                    </form>
                    
                        <i className="fa-solid fa-user"></i>
                        <p>Admin</p>
    
                </div>
            </div>
        </header>
     
    );
}
 
export default Navbar;