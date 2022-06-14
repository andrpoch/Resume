import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Navbar from './NavBar/NavBar';
import './App.css';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </main>
    </>
  )
};
