import React, { lazy, Suspense } from "react";
import { Route,Routes } from 'react-router-dom';
import './App.css';
import NavBarToggle from "./NavBarToggle/NavBarToggle";
import Navbar from './NavBar/NavBar';
import Loader from './Loader/Loader'
import HomePage from "../pages/HomePage";

const AboutPage = lazy(() => import("../pages/AboutPage"));
const BenefitsPage = lazy(() => import("../pages/BenefitsPage"));
const PortfolioPage = lazy(() => import("../pages/PortfolioPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));

export default function App() {
  return (
    <>
      <NavBarToggle />
      <Navbar />
      <main>
          <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/benefits' element={<BenefitsPage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  )
};
