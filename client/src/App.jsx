import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider, useSearchParams } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import PostContent from './pages/PostContent';
import Register from './pages/Register';
import WriteBlog from './pages/WriteBlog';
import { Toaster } from 'react-hot-toast';
import AuthContext from './Context/Auth.Context';
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState([]);
  const router = createBrowserRouter([
    {
      path: "/", element: <Navbar />, children: [
        { index: true, element: <Home /> },
        { path: "post/4050", element: <PostContent /> },
        { path: 'login', element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "writeblog", element: <WriteBlog /> }
      ]
    },



  ])
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, userData, setUserData }}>
      <RouterProvider router={router} >

      </RouterProvider>
    </AuthContext.Provider>
  )
}

export default App
