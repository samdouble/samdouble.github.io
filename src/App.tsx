import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import TopMenu from 'components/TopMenu';
import HomePage from 'pages/HomePage';
import CategoryPage from 'pages/CategoryPage';
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
        { path: "/category/:id", element: <CategoryPage /> },
        { path: "/posts", element: <PostsPage /> },
        { path: "/post/:id", element: <PostPage /> },
      ],
    },
  ],
);

function App() {
  return (
    <div className="App">
      <TopMenu />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
