import React, { useState } from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { Link } from 'react-router-dom';
function Home() {
    const [isLike, setIsLike] = useState(true);
    const handleLike = async (e) => {
        setIsLike(!isLike);
    }
    return (

        <>
            <div className='w-full lg:px-16 px-4  relative top-20 pageHeight flex justify-between gap-4  '>
                <div className='md:w-[75%] w-full  flex flex-wrap items-center justify-between md:pt-5    '>

                    <div className=' md:w-[310px] w-[290px] rounded-b-lg   mt-4 h-fit pb-4 shadow-xl bg-emerald-100 backdrop-blur-lg opacity-95 hover:shadow-xl hover:scale-105 transition duration-500 space-y-3 '>
                        <img className=' rounded-t-lg ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGx0U6rsMtiANpplM60598DrgbU-8LNEXYYQ&usqp=CAU" alt="" />
                        <div className='flex w-[100%] items-center justify-between px-2 mt-2  '>
                            <div className='flex space-x-2 items-center'>
                                <div className='bg-red-400 w-9 h-9 rounded-full'></div>
                                <div className='text-xl font-medium'>John Doe</div>
                            </div>
                            <div onClick={(e) => handleLike(e)}>
                                {isLike ?
                                    <IoIosHeartEmpty size={24} /> :
                                    <FcLike size={28} />}
                            </div>

                            <div className='pr-2 items-center ' >views: <span>40000</span></div>
                        </div>
                        <Link to={`/post/${4050}`}>

                            <h1 className='limit-1-lines pl-2 pr-2 text-xl font-semibold'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis reprehenderit unde ducimus at culpa.</h1>
                            <p className='limit-4-lines pl-2 text-md font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint error ad eum expedita quod! Doloribus assumenda iure, dolores delectus reiciendis iusto aliquam esse autem est itaque culpa voluptate necessitatibus odit fugiat vitae debitis dolorum eligendi eveniet. Et delectus ipsa nobis necessitatibus molestias in omnis pariatur aspernatur labore, exercitationem dicta!</p>
                        </Link>
                    </div>

                    <div className=' w-[310px] rounded-b-lg   mt-4 h-fit pb-4 shadow-xl bg-emerald-100 backdrop-blur-lg opacity-95 hover:shadow-xl hover:scale-105 transition duration-500 space-y-3 '>
                        <img className=' rounded-t-lg ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGx0U6rsMtiANpplM60598DrgbU-8LNEXYYQ&usqp=CAU" alt="" />
                        <div className='flex w-[100%] items-center justify-between px-2 mt-2  '>
                            <div className='flex space-x-2 items-center'>
                                <div className='bg-red-400 w-9 h-9 rounded-full'></div>
                                <div className='text-xl font-medium'>John Doe</div>
                            </div>
                            <div onClick={(e) => handleLike(e)}>
                                {isLike ?
                                    <IoIosHeartEmpty size={24} /> :
                                    <FcLike size={28} />}
                            </div>

                            <div className='pr-2 items-center ' >views: <span>40000</span></div>
                        </div>
                        <Link to={`/post/${4050}`}>

                            <h1 className='limit-1-lines pl-2 pr-2 text-xl font-semibold'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis reprehenderit unde ducimus at culpa.</h1>
                            <p className='limit-4-lines pl-2 text-md font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint error ad eum expedita quod! Doloribus assumenda iure, dolores delectus reiciendis iusto aliquam esse autem est itaque culpa voluptate necessitatibus odit fugiat vitae debitis dolorum eligendi eveniet. Et delectus ipsa nobis necessitatibus molestias in omnis pariatur aspernatur labore, exercitationem dicta!</p>
                        </Link>
                    </div><div className=' w-[310px] rounded-b-lg   mt-4 h-fit pb-4 shadow-xl bg-emerald-100 backdrop-blur-lg opacity-95 hover:shadow-xl hover:scale-105 transition duration-500 space-y-3 '>
                        <img className=' rounded-t-lg ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGx0U6rsMtiANpplM60598DrgbU-8LNEXYYQ&usqp=CAU" alt="" />
                        <div className='flex w-[100%] items-center justify-between px-2 mt-2  '>
                            <div className='flex space-x-2 items-center'>
                                <div className='bg-red-400 w-9 h-9 rounded-full'></div>
                                <div className='text-xl font-medium'>John Doe</div>
                            </div>
                            <div onClick={(e) => handleLike(e)}>
                                {isLike ?
                                    <IoIosHeartEmpty size={24} /> :
                                    <FcLike size={28} />}
                            </div>

                            <div className='pr-2 items-center ' >views: <span>40000</span></div>
                        </div>
                        <Link to={`/post/${4050}`}>

                            <h1 className='limit-1-lines pl-2 pr-2 text-xl font-semibold'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis reprehenderit unde ducimus at culpa.</h1>
                            <p className='limit-4-lines pl-2 text-md font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint error ad eum expedita quod! Doloribus assumenda iure, dolores delectus reiciendis iusto aliquam esse autem est itaque culpa voluptate necessitatibus odit fugiat vitae debitis dolorum eligendi eveniet. Et delectus ipsa nobis necessitatibus molestias in omnis pariatur aspernatur labore, exercitationem dicta!</p>
                        </Link>
                    </div><div className=' w-[310px] rounded-b-lg   mt-4 h-fit pb-4 shadow-xl bg-emerald-100 backdrop-blur-lg opacity-95 hover:shadow-xl hover:scale-105 transition duration-500 space-y-3 '>
                        <img className=' rounded-t-lg ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGx0U6rsMtiANpplM60598DrgbU-8LNEXYYQ&usqp=CAU" alt="" />
                        <div className='flex w-[100%] items-center justify-between px-2 mt-2  '>
                            <div className='flex space-x-2 items-center'>
                                <div className='bg-red-400 w-9 h-9 rounded-full'></div>
                                <div className='text-xl font-medium'>John Doe</div>
                            </div>
                            <div onClick={(e) => handleLike(e)}>
                                {isLike ?
                                    <IoIosHeartEmpty size={24} /> :
                                    <FcLike size={28} />}
                            </div>

                            <div className='pr-2 items-center ' >views: <span>40000</span></div>
                        </div>
                        <Link to={`/post/${4050}`}>

                            <h1 className='limit-1-lines pl-2 pr-2 text-xl font-semibold'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis reprehenderit unde ducimus at culpa.</h1>
                            <p className='limit-4-lines pl-2 text-md font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint error ad eum expedita quod! Doloribus assumenda iure, dolores delectus reiciendis iusto aliquam esse autem est itaque culpa voluptate necessitatibus odit fugiat vitae debitis dolorum eligendi eveniet. Et delectus ipsa nobis necessitatibus molestias in omnis pariatur aspernatur labore, exercitationem dicta!</p>
                        </Link>
                    </div>





                </div>


                <div className='md:ml-6 md:w-[24%]  w-[45%]'>
                    <div className='lg:flex hidden flex-col w-full h-fit items-center  space-y-2    '>
                        <h1 className='text-3xl font-semibold'>Trending Posts</h1>
                        <div className='bg-emerald-100 shadow-lg px-2 py-2 pb-3 rounded-xl w-full hover:scale-x-105 transition duration-300'>
                            <h1 className='limit-1-lines text-lg font-bold'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis reprehenderit unde ducimus at culpa.</h1>
                            <p className='limit-3-lines text-md font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint error ad eum expedita quod! Doloribus assumenda iure, dolores delectus reiciendis iusto aliquam esse autem est itaque culpa voluptate necessitatibus odit fugiat vitae debitis dolorum eligendi eveniet. Et delectus ipsa nobis necessitatibus molestias in omnis pariatur aspernatur labore, exercitationem dicta!</p>
                        </div>
                        <div className='bg-emerald-100 shadow-lg px-2 py-2 pb-3 rounded-xl w-full hover:scale-x-105 transition duration-300'>
                            <h1 className='limit-1-lines text-lg font-bold'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis reprehenderit unde ducimus at culpa.</h1>
                            <p className='limit-3-lines text-md font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint error ad eum expedita quod! Doloribus assumenda iure, dolores delectus reiciendis iusto aliquam esse autem est itaque culpa voluptate necessitatibus odit fugiat vitae debitis dolorum eligendi eveniet. Et delectus ipsa nobis necessitatibus molestias in omnis pariatur aspernatur labore, exercitationem dicta!</p>
                        </div><div className='bg-emerald-100 shadow-lg px-2 py-2 pb-3 rounded-xl w-full hover:scale-x-105 transition duration-300'>
                            <h1 className='limit-1-lines text-lg font-bold'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis reprehenderit unde ducimus at culpa.</h1>
                            <p className='limit-3-lines text-md font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint error ad eum expedita quod! Doloribus assumenda iure, dolores delectus reiciendis iusto aliquam esse autem est itaque culpa voluptate necessitatibus odit fugiat vitae debitis dolorum eligendi eveniet. Et delectus ipsa nobis necessitatibus molestias in omnis pariatur aspernatur labore, exercitationem dicta!</p>
                        </div><div className='bg-emerald-100 shadow-lg px-2 py-2 pb-3 rounded-xl w-full hover:scale-x-105 transition duration-300'>
                            <h1 className='limit-1-lines text-lg font-bold'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis reprehenderit unde ducimus at culpa.</h1>
                            <p className='limit-3-lines text-md font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint error ad eum expedita quod! Doloribus assumenda iure, dolores delectus reiciendis iusto aliquam esse autem est itaque culpa voluptate necessitatibus odit fugiat vitae debitis dolorum eligendi eveniet. Et delectus ipsa nobis necessitatibus molestias in omnis pariatur aspernatur labore, exercitationem dicta!</p>
                        </div><div className='bg-emerald-100 shadow-lg px-2 py-2 pb-3 rounded-xl w-full hover:scale-x-105 transition duration-300'>
                            <h1 className='limit-1-lines text-lg font-bold'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis reprehenderit unde ducimus at culpa.</h1>
                            <p className='limit-3-lines text-md font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint error ad eum expedita quod! Doloribus assumenda iure, dolores delectus reiciendis iusto aliquam esse autem est itaque culpa voluptate necessitatibus odit fugiat vitae debitis dolorum eligendi eveniet. Et delectus ipsa nobis necessitatibus molestias in omnis pariatur aspernatur labore, exercitationem dicta!</p>
                        </div><div className='bg-emerald-100 shadow-lg px-2 py-2 pb-3 rounded-xl w-full hover:scale-x-105 transition duration-300'>
                            <h1 className='limit-1-lines text-lg font-bold'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis reprehenderit unde ducimus at culpa.</h1>
                            <p className='limit-3-lines text-md font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint error ad eum expedita quod! Doloribus assumenda iure, dolores delectus reiciendis iusto aliquam esse autem est itaque culpa voluptate necessitatibus odit fugiat vitae debitis dolorum eligendi eveniet. Et delectus ipsa nobis necessitatibus molestias in omnis pariatur aspernatur labore, exercitationem dicta!</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
