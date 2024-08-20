import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopMenu from 'components/TopMenu';
import HomePage from 'pages/HomePage';
import TestPage from 'pages/TestPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="siteContent">
          <TopMenu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/test" element={<TestPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
