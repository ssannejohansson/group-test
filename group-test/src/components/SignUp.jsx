import {useState} from "react"
import {useNavigate} from "react-router"
import "./LoginSignup.css"
import { FaUser, FaLock } from "react-icons/fa";


function Signup ({formHandle}) {
   

    const navigate = useNavigate ();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.username.value)
        if (e.target.username.value && e.target.password.value) {
            if (!localStorage.getItem('user')) {
                localStorage.setItem('user',JSON.stringify([{username:e.target.username.value, password:e.target.password.value}]))
                navigate ('home');
            }
        }
    } 

    return (
    <div> 
        <div className="form-box login">
            <h1>Register</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                
                    <div className="input-box">
                        <input type="text" 
                        placeholder="Username" 
                        name="username" 
                        required /> 
                        <FaUser className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="password" 
                        placeholder="Password" 
                        name="password" 
                        required />
                        <FaLock className="icon"/>
                    </div>
                    
                    <button type="submit">Register</button>
                    <p>Already have an account? <span onClick = {()=> formHandle('login')}>Log in</span></p>

                </form>
            </div>
            </div>

    );
}


export default Signup