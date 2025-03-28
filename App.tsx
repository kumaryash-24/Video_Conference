import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';   
import Home from './components/Home';
import Meeting from './components/Meeting';          
    
function App() {     
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meeting/:id" element={<Meeting />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
