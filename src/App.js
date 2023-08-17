import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import RecentWork from './components/pages/RecentWork';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import NavBar from './components/NavBar';

const App = () => (
  <main className="mainContainer">
    <section className="subcontainer ">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recent_work" element={<RecentWork />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </section>
  </main>
);

export default App;
