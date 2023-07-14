import React from 'react';


import ReactDOM from "react-dom/client";

import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameBoard from './GameBoard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
 
        <Route path='/tenzies' element={<GameBoard/>}>

        </Route>
        
      
    
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


