
import React from 'react';
import {  BrowserRouter, Route, Routes} from 'react-router-dom';
import Menu from './components/nav/Menu';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Project from './components/pages/project/Project';
import Contact from './components/pages/contact/Contact';

import './App.scss';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

    
    </div>
  );
}

export default App;
