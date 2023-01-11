import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adduser.css'
const AddUser = () => {
    let [name, setName] = useState('')
    let [age, setAge] = useState('')
    let [email, setEmail] = useState('')
    let [phoneNumber, setPhone] = useState('')

    let navigate=useNavigate()

    let HandleSubmit=(e)=>{
        e.preventDefault();
    let userData={name,email,age,phoneNumber}
        fetch('http://localhost:1000/users',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(userData)
        })
        alert('user added successfully')
        navigate('/admin/user-list')

    }
    return (

        <div className="addUser">
            <h1>Add user</h1>
            <div className="form">
                <form action="" onSubmit={HandleSubmit}>
                    <div style={{margin:"10px"}} className="name">
                        <input style={{width:"250px", height:"30px", textAlign:"center"}} value={name} onChange={(e) => setName(e.target.value)} type="text" required placeholder="enter the name" />
                    </div>
                    <div style={{margin:"10px"}} className="age">
                        <input style={{width:"250px", height:"30px", textAlign:"center"}} value={age} onChange={(e) => setAge(e.target.value)} type="number" min='1' required placeholder="enter the age" />
                    </div>
                    <div style={{margin:"10px"}} className="email">
                        <input style={{width:"250px", height:"30px", textAlign:"center"}} value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="enter the email" />
                    </div>
                    <div style={{margin:"10px"}} className="phoneNumber">
                        <input style={{width:"250px", height:"30px", textAlign:"center"}} value={phoneNumber} onChange={(e) => setPhone(e.target.value)} type="tel" minLength='10' maxLength='10' required placeholder="enter the number" />
                    </div>
                    <button style={{width:"150px", height:"30px", textAlign:"center", backgroundColor:"green"}}>Add User</button>
                </form>
            </div>
        </div>
    );
}

export default AddUser;