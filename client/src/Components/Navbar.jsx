import React, { useContext, useDebugValue, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import AuthContext from '../Context/Auth.Context.js'
import axios from 'axios'
import Footer from './Footer.jsx'
axios.defaults.withCredentials = true;
function Navbar() {
    const { isAuth, setIsAuth, userData, setUserData, userId, setUserId } = useContext(AuthContext);
    const verifyToken = async () => {
        try {
            const result = await axios.get("http://localhost:8000/api/user/verifyToken", {
                withCredentials: true
            })
            console.log("verify", result.data)
            setUserData(result.data.user);
            setUserId(result.data.user._id);
            console.log("verify", result.data);
            if (!result.data.result) {
                toast.error(result.data.message);
            }
            setIsAuth(true);

        } catch (error) {
            console.log(error.message);
            setIsAuth(false);
            toast.error("No active session");

        }
    }
    const refreshToken = async () => {
        try {
            const result = await axios.get("http://localhost:8000/api/user/refreshToken", {
                withCredentials: true
            })
            console.log("result", result.data)
            setUserData(result.data.user);
            setUserId(result.data.user._id);
            if (result.data.result) {
                setUserData(result.data.user)
            }
            setIsAuth(true)
            console.log("refresh", result.data);
        } catch (error) {
            console.log(error.message);

        }
        console.log(userData);
    }

    useEffect(() => {
        console.log("Effect triggered");
        if (!isAuth) {
            console.log("Refreshing token...");
            verifyToken();
            refreshToken();
        }

        const intervalId = setInterval(() => {
            console.log("Refreshing token...");
            refreshToken();
        }, 25 * 1000);

        return () => clearInterval(intervalId);
    }, [isAuth, setIsAuth]);


    async function handleDelete(e) {
        e.preventDefault();
        try {
            const result = await axios.get("http://localhost:8000/api/user/deleteToken", {
                withCredentials: true
            })
            console.log(result.data);
            if (result.data.result) {
                setIsAuth(false);
                toast.success("your are logout successfully")
            }
        }
        catch (error) {
            console.log(error.message);
        }

    }
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className='w-full fixed  bg-green-200 h-16 flex items-center justify-between py-3 z-50'>

                <Link to={'/'} className='md:ml-16 sm:ml-6 ml-2 md:text-3xl text-xl text-semibold'>FZN Blog Platform</Link>
                <div className='flex items-center space-x-2 md:mr-16 sm:mr-6 mr-2 '>
                   

                        <Link to={isAuth ? `/writeblog/${userId}` : '/login'}
                            className={`text-lg font-semibold bg-white px-3 py-1 rounded-lg hover:text-black hover:bg-emerald-300 transition duration-500 ease-in-out hover:cursor-pointer sm:inline-block hidden`}>Write Blog</Link>
                        {isAuth ? (
                            <>
                                <button onClick={(e) => handleDelete(e)} className=' md:text-lg text-md font-semibold bg-white md:px-3 px-1 py-1 rounded-lg hover:text-black hover:bg-emerald-300 transition duration-500 ease-in-out hover:cursor-pointer sm:inline-block hidden  ' >Logout</button>
                            </>

                        ) : (<Link to={'/login'} className='text-lg  font-semibold bg-white px-3 py-1 rounded-lg hover:text-black hover:bg-emerald-300 transition duration-500 ease-in-out hover:cursor-pointer'>Login</Link>
                        )}
                
                    {isAuth ? <img src={`http://localhost:8000/uploads/${userData.image}`} className='bg-red-400 w-9 h-9 rounded-full' /> : ""}

                </div>

            </div>
            <Outlet />
            
        </>
    )
}

export default Navbar
