import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { Link } from 'react-router-dom';
import AuthContext from '../Context/Auth.Context';
import axios from 'axios';
import SideBar from '../Components/SideBar';
import Footer from '../Components/Footer';
function Home() {

    const [isLike, setIsLike] = useState(true);
    const { refresh, setRefresh } = useContext(AuthContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetPosts();
    }, []);

    const handleLike = async (e) => {
        setIsLike(!isLike);
    };

    const fetPosts = async () => {
        try {
            const result = await axios.get("http://localhost:8000/api/post/getAllPost");
            setPosts(result.data.posts);
            console.log("res", result.data.posts[0].content.type = "title");  // Log the result.data.posts here
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    
    return (

        <>
            <div className='w-full lg:px-12  px-2 relative top-20 pageHeight flex flex-wrap  justify-between '>
                <div className='w-[95%] lg:w-[75%]   flex flex-wrap items-start justify-between md:pt-5'>
                    {posts &&
                        posts.map((post) => {
                            // Parse the content string to an array
                            const parsedContent = JSON.parse(post.content);

                            return (
                                <div
                                    key={post._id}
                                    className='md:w-[310px] w-full rounded-b-lg mt-4 h-fit pb-4 shadow-xl bg-emerald-100 backdrop-blur-lg opacity-95 hover:shadow-xl hover:scale-105 transition duration-500 space-y-1'
                                >
                                    <img className='w-full h-40 rounded-t-lg' src={`http://localhost:8000/uploads/${post.image}`} alt="" />
                                    <div className='flex w-full items-center justify-between px-2 mt-2'>
                                        {/* ... (rest of your post metadata) */}
                                    </div>
                                    <Link to={`/post/${post._id}`}>
                                        <h1 className='limit-1-lines pl-2 pr-2 text-xl font-semibold'>
                                            {post.title}
                                        </h1>
                                        <p className='limit-4-lines pl-2 text-md font-medium'>
                                            {parsedContent.find(item => item.type === 'paragraph')?.value || 'Default Paragraph'}
                                        </p>
                                    </Link>
                                </div>
                            );
                        })}
                </div>
                <div className='lg:w-[23%] hidden lg:block '>
                    <SideBar />
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Home
