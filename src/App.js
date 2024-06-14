import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Import your CSS file
import Layout from './layout/Layout';
import Layout1 from './layout/Layout1';
import Layout2 from './layout/Layout2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/page1" element={<Layout1/>} />
        <Route path="/page2" element={<Layout2/>} />
        </Routes>
    </Router>
  
   
    
    
  );
}

export default App;
