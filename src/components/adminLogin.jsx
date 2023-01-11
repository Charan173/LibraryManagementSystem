import '../styles/adminLogin.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    const navigate = useNavigate();
    let login = (e) => {
        e.preventDefault();
        let data = { email, password }//data for format
        // console.log(data);
        setEmail('')
        setPassword('')
        // admin validation
        if (email == "admin@gmail.com" && password == "1234") {
            navigate('/admin/')
        }
        else {
            alert('Invalid credentials')
        }
    }
    return (
        <div className='main'>
            <div className="adminlogin">
               
                    <h1>Login as admin</h1>
                    <div className="form_input">
                        <form action="" onSubmit={login}>
                            {/* <label htmlFor="">Email</label> */}
                            <div className="email">
                                <input type="email" required placeholder="email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="password">
                                <input type="password" required placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button>Login</button>
                        </form>
                    </div>
              
            </div>
        </div>
    )
}
export default AdminLogin