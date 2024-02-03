import React, { useContext, useDebugValue, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import AuthContext from '../Context/Auth.Context.js'
import axios from 'axios'
axios.defaults.withCredentials = true;
function Navbar() {
    const { isAuth, setIsAuth, userData, setUserData } = useContext(AuthContext);
    const verifyToken = async () => {
        try {
            const result = await axios.get("http://localhost:8000/api/user/verifyToken", {
                withCredentials: true
            })
            setUserData(result.data.user);
            console.log("verify", result);
            if (!result.data.result) {
                // toast.error("No session");
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
        if (!isAuth) {
            verifyToken();
        }

        const intervalId = setInterval(() => {
            refreshToken();
        }, 30 * 1000); // Set the interval to 60 seconds (1 minute)

        // Cleanup the interval when the component is unmounted
        return () => clearInterval(intervalId);

        // Optionally, you can add dependencies to the dependency array if needed
    }, [isAuth]);
    // useEffect(() =>{
    //     const intervalId = setInterval(() => {
    //         refreshToken();
    //     }, 30 * 1000); // Set the interval to 60 seconds (1 minute)

    //     // Cleanup the interval when the component is unmounted
    //     return () => clearInterval(intervalId);
    // }, [])

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

                <Link to={'/'} className='md:ml-16 ml-6 text-3xl text-semibold'>FZN Blog Platform</Link>
                <div className='flex items-center space-x-2 md:mr-16 mr-6 '>
                    <Link to={'/writeblog'} className='text-lg font-semibold bg-white px-3 py-1 rounded-lg hover:text-black hover:bg-emerald-300 transition duration-500 ease-in-out hover:cursor-pointer'>Write Blog</Link>
                    {isAuth ? (<button onClick={(e) => handleDelete(e)} className='text-lg font-semibold bg-white px-3 py-1 rounded-lg hover:text-black hover:bg-emerald-300 transition duration-500 ease-in-out hover:cursor-pointer' >Logout</button>
                    ) : (<Link to={'/login'} className='text-lg font-semibold bg-white px-3 py-1 rounded-lg hover:text-black hover:bg-emerald-300 transition duration-500 ease-in-out hover:cursor-pointer'>Login</Link>
                    )}
                    {isAuth ? <img src={`http://localhost:8000/uploads/${userData.image}`} className='bg-red-400 w-9 h-9 rounded-full' /> : ""}

                </div>

            </div>
            <Outlet />
        </>
    )
}

export default Navbar
