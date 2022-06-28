import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './NavBar/NavBar';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import BenefitsPage from '../pages/BenefitsPage';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage';
import { useMediaQuery } from 'react-responsive'

export default function App() {
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1040px)' })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' })
  return (
    <>
      {isBigScreen && <Navbar />}
      {isTabletOrMobile && <Navbar />}
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
