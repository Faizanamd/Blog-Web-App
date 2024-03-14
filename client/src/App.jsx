import React, { useState, useEffect, useDebugValue, useId } from 'react'
import { createBrowserRouter, RouterProvider, useSearchParams } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import PostContent from './pages/PostContent';
import Register from './pages/Register';
import WriteBlog from './pages/WriteBlog';
import toast, { Toaster } from 'react-hot-toast';
import AuthContext from './Context/Auth.Context';
import axios from 'axios'
axios.defaults.withCredentials = true;
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState([]);
  const [userId, setUserId] = useState("");
  const [postId, setPostId] = useState("");
  const [refresh, setRefresh] = useState(0);
  const [likeList, setLikeList] = useState([]);
  const [isLike, setIsLike] = useState(false);
  const [postData, setPostData] = useState({});

  const verifyToken = async () => {
    try {
      const result = await axios.get("https://blog-web-app-6k4j.onrender.com/api/user/verifyToken", {
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
      const result = await axios.get("https://blog-web-app-6k4j.onrender.com/api/user/refreshToken", {
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
  const fetchUserLikes = async () => {
    try {
      const result = await axios.get(`https://blog-web-app-6k4j.onrender.com/api/like/getLikePostByPostIdUserId/${postId}`)
      if (result.data.status) {
        setLikeList(result.data.result);
        if (isAuth) {
          const userLikes = likeList.find((userLike) => userLike.userId === userId);
          console.log("user like", userLikes)
          setIsLike(userId.like);
        }

      }
      setIsLike(result.data.result.like)
      console.log("like rsult", result.data.result);
    } catch (err) {
      console.log(err.message);
    }
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
  }, []);


  async function handleDelete(e) {
    e.preventDefault();
    try {
      const result = await axios.get("https://blog-web-app-6k4j.onrender.com/api/user/deleteToken", {
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






















  const router = createBrowserRouter([
    {
      path: "/", element: <Navbar />, children: [
        { index: true, element: <Home /> },
        { path: "post/:postId", element: <PostContent /> },
        { path: 'login', element: <Login /> },
        { path: "register", element: <Register /> },
        { path: `writeblog/:userId`, element: <WriteBlog /> }
      ]
    },



  ])
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, userData, setUserData, userId, setUserId, refresh, setRefresh, handleDelete, likeList, setLikeList, isLike, setIsLike, postData, setPostData, postId, setPostId, fetchUserLikes }}>
      <RouterProvider router={router} >

      </RouterProvider>
    </AuthContext.Provider>
  )
}

export default App
