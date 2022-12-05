import React from 'react';

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/homePage';
import PartnerPage from './pages/partner/partnerPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage></HomePage>} />
        <Route path='/partner' element={<PartnerPage></PartnerPage>}/>
        <Route path='*' element={<HomePage></HomePage>} />      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
