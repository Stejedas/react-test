import React from 'react';

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/homePage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage></HomePage>} />
        <Route path='/partner' element={<></>}/>
        <Route path='*' element={<></>} />      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
