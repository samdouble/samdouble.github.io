import { useState } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Footer from '@/components/Footer';
import TopMenu from '@/components/TopMenu';
import HomePage from '@/pages/HomePage';
import CategoryPage from '@/pages/CategoryPage';
import PostsPage from '@/pages/PostsPage';
import PostPage from '@/pages/PostPage';
import { LanguageContext } from '@/services/contexts';
import { initialLanguage } from '@/services/language';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const router = createHashRouter(
  [
    {
      path: '/',
      // errorElement: <Error />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/home', element: <HomePage /> },
        { path: '/category/:id', element: <CategoryPage /> },
        { path: '/posts', element: <PostsPage /> },
        { path: '/post/:id', element: <PostPage /> },
        { path: '/404', element: <div>404</div> },
      ],
    },
  ],
);

function App() {
  const [language, setLanguage] = useState(initialLanguage);

  return (
    <div className="App">
      <LanguageContext.Provider value={language}>
        <TopMenu
          onChangeLanguage={setLanguage}
        />
        <RouterProvider router={router} />
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
