import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/about';
import Home from './components/home';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
