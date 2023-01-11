import { useNavigate } from "react-router-dom";
import '../styles/userLogin.css'
const UserLogin = () => {
    let navigate = useNavigate()
    let login = () => {
        navigate('/user/')
    }
    return (
        <div className="main">
            <div className="userlogin">
               
                    <h1>Login as User</h1>
                    <div className="form_input" >
                        <form action="" onSubmit={login}>
                            {/* <label htmlFor="">Email</label> */}
                            <div className="email">
                                <input type="email" required placeholder="email address" />
                            </div>
                            <div className="password">
                                <input type="password" required placeholder="password" />
                            </div>
                            <button>Login</button>
                        </form>
                    </div>
           
            </div>
        </div>
    );
}

export default UserLogin;