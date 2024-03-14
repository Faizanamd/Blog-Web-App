import React, { useContext, useDebugValue, useEffect, useState } from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import AuthContext from '../Context/Auth.Context.js'
import axios from 'axios'
axios.defaults.withCredentials = true;
function Navbar() {
    const { isAuth, setIsAuth, userData, setUserData, userId, setUserId, handleDelete } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);
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
                        <div className='relative'>
                            <button onClick={(e) => { handleDelete(e) }} className='md:text-lg text-md font-semibold bg-white md:px-3 px-1 py-1 rounded-lg hover:text-black hover:bg-emerald-300 transition duration-500 ease-in-out hover:cursor-pointer sm:inline-block hidden'>
                                Logout
                            </button>

                            <div className={`w-[160px] h-fit bg-emerald-200 absolute sm:top-12 top-8 -right-12   ${menuOpen ? "flex" : "hidden"}   flex-col items-start    list-none`}>
                                <Link to={`/dashboard/${userId}`} className={` w-full border-b-2 border-white pl-2 py-2 font-bold`}>Your Dashboard</Link>
                                <Link to={isAuth ? `/writeblog/${userId}` : '/login'}
                                    className={` sm:hidden w-full border-b-2 border-white pl-2 py-2 font-bold`}>Write Blog</Link>
                                <button onClick={(e) => { handleDelete(e) }} className={` sm:hidden w-full border-b-2 border-white pl-2 py-2 font-bold`}>
                                    Logout
                                </button>
                            </div>
                        </div>

                    ) : (<Link to={'/login'} className='text-lg  font-semibold bg-white px-3 py-1 rounded-lg hover:text-black hover:bg-emerald-300 transition duration-500 ease-in-out hover:cursor-pointer'>Login</Link>
                    )}

                    {isAuth ? <img onClick={(e) => setMenuOpen(!menuOpen)} src={`https://blog-web-app-backend-ibh1acrfw-faizan-ahmads-projects-1250996e.vercel.app/uploads/${userData.image}`} className='bg-red-400 w-9 h-9 rounded-full' /> : ""}

                </div>

            </div>
            <Outlet />

        </>
    )
}

export default Navbar
