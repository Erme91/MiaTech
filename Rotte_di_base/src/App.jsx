import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import PublicLayout from './layouts/PublicLayout';
import Details from './pages/Details';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='details/:id' element={<Details />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App