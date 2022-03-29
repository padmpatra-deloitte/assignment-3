import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/about';
import Home from './components/home';
import Contact from './components/contact';
import Error from './components/errror';
import Nav from './components/nav';
import UserFormTable from './components/UserFormTable';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Nav />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/user" element={<UserFormTable />}/>
          <Route path="/" element={<Home />} />
          <Route path='*' element={<Error />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
