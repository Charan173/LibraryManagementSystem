import { Routes,Route } from "react-router-dom";
import AddBook from "./addbook";
import AddUser from "./adduser";
import AdminDashboard from "./adminDashboard";
import AdminNavbar from "./adminNavbar";
import BookList from "./bookList";
import ReadBook from "./readBook";
import UserList from "./userList";


const AdminHome = () => {
    return ( 
        <div className="adminhome">
            <AdminNavbar/>
            <Routes>
                <Route path="/" element={ <AdminDashboard/>}/>
                <Route path="/book-list" element={<BookList/>}/>
                <Route path="/user-list" element={<UserList/>}/>
                <Route path="/add-book" element={<AddBook/>}/>
                <Route path="/add-user" element={<AddUser/>}/>
                <Route path="/book-list/:id" element={<ReadBook/>}/>

            </Routes>
           
        </div>
     );
}
 
export default AdminHome;