import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Lesson from "./components/Lesson";
import Greeting from "./components/Greeting";
import Launch from './Launch';
import React from 'react';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/greeting" element={<Greeting/>}/>
        <Route path="/lesson" element={<Lesson/>}/>
        <Route path="/game" element={<Launch/>}/>
      </Routes>
      </div>
      
    </Router>
    
    
  );
}

export default App;
