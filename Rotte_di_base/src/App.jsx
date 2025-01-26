import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import PublicLayout from './layouts/PublicLayout';
import Details from './pages/Details';
import List from './components/List';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<PublicLayout />}>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path="/todos/:id" element={<Details />} />
            <Route path="list" element={<List />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App