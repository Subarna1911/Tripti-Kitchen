import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Home from './pages/Home';
import About from './pages/About';
import Recipe from './pages/Recipe';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Modal />
    </Router>
  );
};

export default App;
