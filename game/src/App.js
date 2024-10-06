import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
// import Game from "./components/Game";
import Launch from "./Launch";
import Lesson from "./components/Lesson";
import Greeting from "./components/Greeting";
import QA from "./components/QA";
import React from 'react';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/greeting" element={<Greeting/>}/>
        <Route path="/lesson" element={<Lesson/>}/>
        {/* <Route path="/game" element={<Game/>}/> */}
        <Route path="/launch" element={<Launch/>}/>
        <Route path="/qa" element={<QA/>}/>
      </Routes>
      </div>
      
    </Router>
    
    
  );
}

export default App;
