import React from 'react';
import NavBar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes> {/* Wrap Routes */}
          <Route path='/'/>
          <Route path='/About'/>
          <Route path='/Donations'/>
          <Route path='/Volunteer'/>
          <Route path='/News'/>
          <Route path='/Contact'/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;