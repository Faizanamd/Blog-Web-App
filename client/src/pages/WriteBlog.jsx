import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Context/Auth.Context';
import { useNavigate } from 'react-router-dom';

function WriteBlog() {

    const { isAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const [content, setContent] = useState([
        { type: '', value: '' }
    ]);

    const addParagraph = () => {
        setContent([...content, { type: 'paragraph', value: '' }]);
    };

    const addHeading = () => {
        setContent([...content, { type: 'heading', value: '' }]);
    };

    const addImage = () => {
        setContent([...content, { type: 'image', value: '' }]);
    };

    const handleContentChange = (index, event) => {
        const updatedContent = [...content];
        updatedContent[index].value = event.target.value;
        setContent(updatedContent);
    };
    useEffect(() => {
        // if (!isAuth) {

        //     navigate("/login")
        // }
        // else {
        //     navigate("/writeblog")
        // }
    }, [])
    const createFormData = () => {
        const newFormData = new FormData();
        content.forEach((item, index) => {
            newFormData.append(`content_${index}`, JSON.stringify(item));
        });
        // setFormData(newFormData);
    };
    const publishBlog = async (e) => {
       const result= await createFormData();
        // Here you can send formData to your backend or do whatever you need to do with it
        console.log(result);
    };
    return (
        <div className='lg:w-[75%] md:w-[85%] w-[98%]  pt-36  mx-auto  '>
            <div className='w-full bg-emerald-200    lg:px-8 md:px-6 px-2 py-6 rounded-lg flex md:flex-row flex-col items-start justify-between '>
                <div className="flex md:flex-col sm:full md:space-y-4  md:space-x-0 space-x-4  w-16 items-center mb-4">
                    <button onClick={addHeading} className="w-full bg-blue-500 text-white px-1 py-2 rounded-md hover:bg-blue-600">&lt;h1&gt;</button>
                    <button onClick={addParagraph} className="w-full bg-blue-500 text-white px-1 py-2 rounded-md hover:bg-blue-600"> &lt;p&gt; </button>
                    <button onClick={addImage} className="w-full bg-blue-500 text-white px-1 py-2 rounded-md hover:bg-blue-600">&lt;img&gt;</button>
                </div>
                <div className='md:w-[85%]  w-[100%] '>
                    <input type="text" placeholder="Title" className="w-full bg-gray-100 rounded-md p-2 mb-4 outline-none" />

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

                            {item.type === 'image' && (
                                <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    className="mb-2 outline-none"
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


/* 

   <div className="max-w-4xl mx-auto bg-emerald-200 shadow-xl rounded-md  p-6  top-20 left-[30%] ">
                <div className='flex '>

                    <div className="flex flex-col  w-6 items-start mb-4">
                        <button onClick={addParagraph} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"> &lt;p&gt; </button>
                        <button onClick={addHeading} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">&lt;h1&gt;</button>
                        <button onClick={addImage} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">&lt;img&gt;</button>
                    </div>
                    <div>
                        <input type="text" placeholder="Title" className="w-full bg-gray-100 rounded-md p-2 mb-4" />

                        {content.map((item, index) => (
                            <div key={index} className="mb-4">
                                {item.type === 'paragraph' && (
                                    <textarea
                                        placeholder="Write your paragraph here..."
                                        className="w-full h-24 bg-gray-100 rounded-md p-2 mb-2"
                                        value={item.value}
                                        onChange={(event) => handleContentChange(index, event)}
                                    />
                                )}

                                {item.type === 'heading' && (
                                    <input
                                        type="text"
                                        placeholder="Enter your heading"
                                        className="w-full bg-gray-100 rounded-md p-2 mb-2"
                                        value={item.value}
                                        onChange={(event) => handleContentChange(index, event)}
                                    />
                                )}

                                {item.type === 'image' && (
                                    <input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        className="mb-2"
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                </div>
                <div className="mt-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Publish</button>
                </div>
            </div>

*/