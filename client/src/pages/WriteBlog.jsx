import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Context/Auth.Context';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function WriteBlog() {

    const { isAuth } = useContext(AuthContext);
    useEffect(() => {
        if (!isAuth) {
            navigate("/login")
        }

    }, [])
    const { id } = useParams();
    const navigate = useNavigate();
    const [image, setImages] = useState();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState([
        { type: '', value: '' }
    ]);

    const addParagraph = () => {
        setContent([...content, { type: 'paragraph', value: '' }]);
    };

    const addHeading = () => {
        setContent([...content, { type: 'heading', value: '' }]);
    };



    const handleContentChange = (index, event) => {
        const updatedContent = [...content];
        updatedContent[index].value = event.target.value;
        setContent(updatedContent);
    };


    const publishBlog = async (e) => {
        const formData = new FormData();
        formData.append('image', image);
        // Convert the content array to a JSON string
        formData.append('content', JSON.stringify(content));
        formData.append("userId", id);
        formData.append("title", title);

        try {
            const result = await axios.post("https://blog-web-app-6k4j.onrender.com/api/post/newpost", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(result.data);
            if (result.data.status) {
                toast.success(result.data.message);
                navigate("/")
                setContent([]);
                setImages();
            } else {
                toast.error(result.data.message);
            }
        } catch (error) {
            console.log(error.message);
        }
    };


    return (
        <div className='lg:w-[75%] md:w-[85%] w-[98%]  pt-36  mx-auto  '>
            <div className='w-full bg-emerald-200    lg:px-8 md:px-6 px-2 py-6 rounded-lg flex md:flex-row flex-col items-start justify-between '>
                <div className="flex md:flex-col sm:full md:space-y-4  md:space-x-0 space-x-4  w-16 items-center mb-4">
                    <button onClick={addHeading} className="w-full bg-blue-500 text-white px-1 py-2 rounded-md hover:bg-blue-600">&lt;h1&gt;</button>
                    <button onClick={addParagraph} className="w-full bg-blue-500 text-white px-1 py-2 rounded-md hover:bg-blue-600"> &lt;p&gt; </button>
                </div>
                <div className='md:w-[85%]  w-[100%] '>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full bg-gray-100 rounded-md p-2 mb-4 outline-none"
                    />
                    <input type="file" onChange={(e) => setImages(e.target.files[0])} />

                    {content.map((item, index) => (
                        <div key={index} className="mb-4">
                            {item.type === 'paragraph' && (
                                <textarea
                                    placeholder="Write your paragraph here..."
                                    className="w-full h-24 bg-gray-100 rounded-md p-2 mb-2 outline-none"
                                    value={item.value}
                                    onChange={(event) => handleContentChange(index, event)}
                                />
                            )}

                            {item.type === 'heading' && (
                                <input
                                    type="text"
                                    placeholder="Enter your heading"
                                    className="w-full bg-gray-100 rounded-md p-2 mb-2 outline-none"
                                    value={item.value}
                                    onChange={(event) => handleContentChange(index, event)}
                                />
                            )}


                        </div>
                    ))}
                    <div className="w-full mt-4">
                        <button onClick={(e) => publishBlog(e)} className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Publish</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WriteBlog;

