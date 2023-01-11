import { useState,useEffect } from "react";
import '../styles/userList.css'
const UserList = () => {
    let[users,setusers]=useState([])
    useEffect(() => {
        let fetchdata = async () => {
            let response = await fetch('http://localhost:1000/users')
            let data=await response.json();
            setusers(data)
            // console.log(data);
        }
        fetchdata()
    },[users])
    let handleremove=(id,name)=>{
        fetch(`http://localhost:1000/users/${id}`, {
            method: 'DELETE'
        })
        alert(`${name} will be deleted Permanently`)
    }
    return ( 
        <div className="userlist">
            <h1>User List</h1>
            <div className="user_section">
                {users.map(data=>(
                    <div className="user">
                        <h2><span>Name: </span>{data.name}</h2>
                        <h4> <span id="span" > Age: </span>{data.age}</h4>
                        <h4><span id="span">Email: </span>{data.email}</h4>
                        <h4><span>Phone Num:</span>{data.phoneNumber}</h4>
                        <button onClick={()=>handleremove(data.id,data.name)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default UserList;