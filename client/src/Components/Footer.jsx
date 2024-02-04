import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-green-200  bottom-0 w-screen shadow-xl text-black py-8 mt-24 ">
            <div className="container mx-auto flex flex-col md:items-start items-center md:flex-row md:justify-around">
                {/* Newsletter Subscription */}
                <div className=" w-[300px] mb-4 md:mb-0 flex flex-col space-y-3">
                    <h3 className="text-lg font-semibold mb-2">Subscribe to our Newsletter</h3>
                    <div className="flex items-center space-x-2 w-[300px]">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="py-2 px-3 text-black rounded-l-md outline-none"
                        />
                        <button className="bg-white md:font-bold font-medium py-2 md:px-4 px-2 rounded-r-md hover:bg-green-300 focus:outline-none">
                            Subscribe
                        </button>
                    </div>
                    <div className='flex flex-wrap  space-x-2 items-center justify-center ' >
                        <Link className='w-fit px-3 py-2 bg-white hover:bg-green-400 rounded-lg mb-2 '>My Resume</Link>
                        <Link className='w-fit px-3 py-2 bg-white hover:bg-green-400 rounded-lg mb-2 '>Portfolio</Link>
                        <Link className='w-fit px-3 py-2 bg-white hover:bg-green-400 rounded-lg  mb-2 '>LinkedIn</Link>
                        <Link className='w-fit px-3 py-2 bg-white hover:bg-green-400 rounded-lg  mb-2 ' >GithHub</Link>
                    </div>
                </div>

                {/* Contact Form */}
                <div className='md:w-[300px] w-[280px]'>
                    <h3 className="text-xl font-semibold text-center   mb-2">Contact Me</h3>
                    <form className="flex flex-col space-y-2">
                        {/* Add your form inputs here */}
                        <input className='outline-none  px-3 py-2 rounded-xl shadow-lg text-black' type="text" placeholder='Full Name' />
                        <input className='outline-none  px-3 py-2 rounded-xl shadow-lg text-black' type="email" placeholder='Email' />
                        <input className='outline-none  px-3 py-2 rounded-xl shadow-lg text-black' type="text" placeholder='Subject' />
                        <textarea className='outline-none  px-3 py-2 rounded-xl shadow-lg text-black' placeholder='Write what u want ask?' ></textarea>
                        <button type="submit" className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md  focus:outline-none">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
