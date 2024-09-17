import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Punk from './pages/Punk';
import Doodles from './pages/Doodles';
import Myth from './pages/Myth';
import FarEast from './pages/FarEast'
import Dinos from './pages/Dinos'
import Steam from './pages/Steam'


function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen flex flex-col">
       
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cyberpunk" element={<Punk />} />
            <Route path="/doodles" element={<Doodles />} />
            <Route path="/myth" element={<Myth />} />
            <Route path="/dinos" element={<Dinos />} />
            <Route path="/asia" element={<FarEast />} />
            <Route path="/steampunk" element={<Steam />} />


          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
