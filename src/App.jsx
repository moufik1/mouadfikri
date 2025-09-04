import React from 'react';
import Navbar from './components/Navbar';
import Startseite from './components/Home';
import About from './components/About';
import Projekte from './components/Projects';
import Fähigkeiten from './components/Skills';
import Kontakt from './components/Contact';
import Dokumente from './components/Documents';
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
              <Startseite />
              <About />
              <Projekte />
              <Fähigkeiten />
              <Dokumente />
              <Kontakt />
            </main>
          </div>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
