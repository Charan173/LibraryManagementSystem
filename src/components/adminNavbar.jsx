import '../styles/adminNavbar.css'
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    return (
        <div className="adminNavbar">
            <div className="port">
                <img src="https://th.bing.com/th?q=User+with+PC+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="" />
                <h3>AdminPortal</h3>
            </div>
            <nav className="navbar">
                <Link to="/admin/">Dashboard</Link>
                <Link to="add-book">Add Books</Link>
                <Link to="add-user">Add Users</Link>
                <Link to="book-list">Books Lists</Link>
                <Link to="user-list">Users Lists</Link>
                <Link to="/">Logout</Link>
            </nav>
        </div>
    );
}

export default AdminNavbar;