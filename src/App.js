import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './Components/Navbar';
import Category from './Pages/Category';
import Home from './Pages/Home';
import PhotoInfo from './Pages/PhotoInfo';
import About from './Pages/About';
import Profile from './Pages/Profile';
import store from './Redux/store';
import './App.css';

const App = () => (
  <Provider store={store}>
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route path="/category/">
        <Route
          path=":id"
          element={<Category />}
        />
      </Route>
      <Route
        path="/category/:id/:name"
        element={<PhotoInfo />}
      />
      <Route
        path="/about"
        element={<About />}
      />
      <Route
        path="/profile"
        element={<Profile />}
      />
    </Routes>
  </Provider>
);

export default App;
