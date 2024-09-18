import React from 'react';
import Home from './component/Home';
import About from './component/About';
import Donations from './component/Donations';
import Volunteer from './component/Volunteer';
import News from './component/News';
import Contact from './component/Contact';
import NavBar from './component/Navbar';
import Hnav from './component/Hnav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
const App = () => {
  return (
    <div>
      <Router>
        <Hnav/>
        <NavBar />
        <Routes> 
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Donations'element={<Donations/>} />
          <Route path='/Volunteer' element={<Volunteer/>}/>
          <Route path='/News' element={<News/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;