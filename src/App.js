import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Category from './Pages/Category';
import Home from './Pages/Home';
import PhotoInfo from './Pages/PhotoInfo';
import About from './Pages/About';
import Profile from './Pages/Profile';
import './App.css';

const App = () => (
  <div className="container">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/Category/photo" element={<PhotoInfo />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </div>
);

export default App;
