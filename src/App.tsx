import React from 'react';
import { createHashRouter, HashRouter, RouterProvider, Route, Routes } from 'react-router-dom';
import TopMenu from 'components/TopMenu';
import HomePage from 'pages/HomePage';
import PostsPage from 'pages/PostsPage';
import PostPage from 'pages/PostPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const router = createHashRouter(
  [
    {
      path: "/",
      // errorElement: <Error />,
      children : [
        { path: "/", element: <HomePage /> },
        { path: "/home", element: <HomePage /> },
        { path: "/posts/:category", element: <PostsPage /> },
        { path: "/post/:id", element: <PostPage /> },
      ],
    },
  ],
);

function App() {
  return (
    <div className="App">
      {
        /*
          <HashRouter>
            <div className="siteContent">
              <TopMenu />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/posts/:category" element={<PostsPage />} />
                <Route path="/post/:id" element={<PostPage />} />
              </Routes>
            </div>
          </HashRouter>
        */
      }
      <TopMenu />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
