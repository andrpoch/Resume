import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Navbar from './NavBar/NavBar';
import './App.css';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import BenefitsPage from '../pages/BenefitsPage';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/benefits' element={<BenefitsPage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </main>
    </>
  )
};
