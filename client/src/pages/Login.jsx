import React, { useContext, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import AuthContext from '../Context/Auth.Context'
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function handleLogin(e) {
        e.preventDefault();
        try {
            const result = await axios.post("http://localhost:8000/api/user/login", { email, password })
            console.log(result.data);
            const data = result.data;
            if (data) {
                if (data.status) {
                    toast.success(data.message);
                    setIsAuth(true);
                    navigate('/');
                } else {
                    toast.error(data.message);
                }
            }
        } catch (err) {
            console.log(err.message);
        }

    }
    return (

    
            <div className=' absolute top-24 w-full flex justify-center' >
                <div className='md:w-[350px] mt-12 flex flex-col items-center space-y-3 bg-emerald-200 shadow-xl px-4 py-5 rounded-xl'>
                    <h1 className='text-2xl font-bold'>Login</h1>
                    <form className='w-full flex flex-col items-center justify-center space-y-3'>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className='outline-none w-[95%] px-2 py-2 text-lg border-0 rounded-lg ' type="text" placeholder='email...' />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className='outline-none w-[95%] px-2 py-2 text-lg border-0 rounded-lg ' type="email" placeholder='password' />
                        <button onClick={(e) => handleLogin(e)} className='bg-emerald-400 w-[95%]  py-2 rounded-xl text-xl font-bold'>Login</button>
                    </form>
                    <span>Alrady have an account? <Link to={'/register'} className='text-xl'>Register</Link></span>
                </div>
            </div>

    )
}

export default Login
