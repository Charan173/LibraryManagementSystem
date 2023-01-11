import { Link } from "react-router-dom";
import '../styles/userNavbar.css'
const UserNavbar = () => {
    return ( 
        <div className="userNavbar">
            <div className="port">
                <img src="https://th.bing.com/th?q=User+with+PC+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="" />
                <h3>UserPortal</h3>
            </div>
            <nav className="navbar">
                <Link to="/user/">Dashboard</Link>
                <Link to="book-list">Books Lists</Link>
                <Link to="/">Logout</Link>
            </nav>
        </div>
     );
}
 
export default UserNavbar;