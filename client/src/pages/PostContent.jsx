import React, { useEffect } from 'react'
import { useState } from 'react';
import { AiOutlineLike } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import SideBar from '../Components/SideBar';
import Footer from '../Components/Footer';
function PostContent() {
    const { postId } = useParams();
    console.log("poostid", String(postId));
    const [isLike, setIsLike] = useState(false);
    const [postData, setPostData] = useState({});
    const fetPost = async () => {
        const result = await axios.get(`http://localhost:8000/api/post/getPostById/${postId}`)
        if (!result.data.status) {
            toast.error(result.data.message);
        }
        console.log("postdata", result.data.posts)
        setPostData(result.data.posts)
    }
    useEffect(() => {
        fetPost();
        console.log(postData);
    }, [])
    const handleLike = async (e) => {
        setIsLike(!isLike);
    }
    return (

        <>
            <div className='w-full md:px-16  relative top-20 pageHeight flex md:flex-row md:space-x-8 flex-col items-center justify-center '>

                {postData && (
                    <div className='md:w-[100%] w-[90%] mx-auto flex flex-col   pt-5'>
                        <h1 className='font-bold lg:text-3xl md:text-2xl text-xl  '>{postData.title}</h1>
                        <div className='flex w-full items-center justify-between px-2 mt-2'>
                            <div className='flex space-x-2 items-center'>
                                <div className='bg-red-400 w-9 h-9 rounded-full'></div>
                                <div className='text-xl font-medium'>John Doe</div>
                            </div>
                            <div className='flex space-x-2' onClick={(e) => handleLike(e)}>
                                {isLike ?
                                    <IoIosHeartEmpty size={24} /> :
                                    <FcLike size={28} />}
                                <span>{postData.likes}</span>
                            </div>
                            <div className='pr-2 items-center'>views: <span>{postData.views}</span></div>
                        </div>
                        <div className='w-full flex justify-center my-6'>
                            <img className='w-[85%] rounded-md opacity-90 hover:scale-x-110 transition duration-700 aspect-video' src={`http://localhost:8000/uploads/${postData.image}`} alt="" />
                        </div>
                        {postData.content && JSON.parse(postData.content).map((item, index) => {
                            switch (item.type) {
                                // case 'title':
                                //     return <h1 key={index} className='text-2xl font-bold'>{item.value}</h1>;
                                case 'heading':
                                    return <h2 key={index} className='sm:text-xl text-lg md:font-bold font-medium'>{item.value}</h2>;
                                case 'paragraph':
                                    return <p key={index} className='md:text-xl text-sm mt-4 mb-4 font-medium font-mono sm:text-justify text-center'>{item.value}</p>;
                                default:
                                    return null;
                            }
                        })}

                        <footer className='my-8'></footer>
                    </div>
                )}
                <div className='lg:w-[30%] hidden lg:block '>
                    <SideBar />
                </div>

            </div>
            <Footer />
        </>
    )
}

export default PostContent
