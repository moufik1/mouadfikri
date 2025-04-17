import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/about';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Documents from './components/Documents';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gray-900">
            <Navbar />
            <main>
              <Home />
              <About />
              <Projects />
              <Skills />
              <Documents />
              <Contact />
            </main>
          </div>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
