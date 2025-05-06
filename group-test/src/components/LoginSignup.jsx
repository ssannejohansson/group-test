import {useState} from "react"
import {useNavigate} from "react-router"
import "./LoginSignup.css"
import Login from "./Login.jsx";
import Signup from "./SignUp.jsx";


function LoginSignup() {
const [form, setForm] = useState('login');


return (
    <>
    {form === 'login' ? (<Login formHandle={setForm}/>) : (<Signup formHandle={setForm}/>) }
    </>
)
}

export default LoginSignup; 