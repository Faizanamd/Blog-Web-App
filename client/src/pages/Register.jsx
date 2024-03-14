import React, { useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState()
    const [password, setPassword] = useState("");
    const [cpasword, setCPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== cpasword) {
            setPassword("");
            setCPassword("");
            return toast.error("Password not matched");
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);
        formData.append('password', password);

        try {
            const result = await axios.post("https://blog-web-app-backend-ibh1acrfw-faizan-ahmads-projects-1250996e.vercel.app/api/user/register", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Handle successful registration
            const data = result.data;
            if(data){
                if(data.status){
                    toast.success(data.message);
                    navigate("/login");
                }else{
                    toast.error(data.message)
                }
            }

        } catch (error) {
            // Handle registration error
            console.error(error);
        }
    };


    return (
        <div className=' absolute top-24 w-full flex justify-center'>

            <div className='md:w-[350px] mt-12 flex flex-col items-center space-y-3 bg-emerald-200 shadow-xl px-4 py-5 rounded-xl'>
                <h1 className='text-2xl font-bold'>Create an Account</h1>
                <form onSubmit={(e) => handleRegister(e)} encType="multipart/form-data" className='w-full flex flex-col items-center justify-center space-y-3'>
                    <input value={name} onChange={(e) => setName(e.target.value)} className='outline-none w-[95%] px-2 py-2 text-lg border-0 rounded-lg ' type="text" placeholder='Name' required />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='outline-none w-[95%] px-2 py-2 text-lg border-0 rounded-lg ' type="email" placeholder='email' required />
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" className='outline-none w-[95%] px-2 py-2 text-lg border-0 rounded-lg ' />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='outline-none w-[95%] px-2 py-2 text-lg border-0 rounded-lg ' type="password" placeholder='password' required />
                    <input value={cpasword} onChange={(e) => setCPassword(e.target.value)} className='outline-none w-[95%] px-2 py-2 text-lg border-0 rounded-lg ' type="password" placeholder='confirm password' required />


                    <button className='bg-emerald-400 w-[95%]  py-2 rounded-xl text-xl font-bold'>Register</button>
                </form>
                <span>Don't have an account? <Link to={'/login'} className='text-xl font-bold'>Login</Link></span>
            </div>
        </div>
    )
}

export default Register
