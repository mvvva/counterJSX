import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Rgb from './components/Rgb';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <nav className="bg-blue-600 p-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link 
                className="text-white text-lg hover:bg-white hover:text-slate-950 px-3 py-4 rounded-md" 
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                className="text-white text-lg hover:bg-white hover:text-slate-950 px-3 py-4 rounded-md" 
                to="/rgb"
              >
                Color Context
              </Link>
            </li>
          </ul>
        </nav>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rgb" element={<Rgb />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
