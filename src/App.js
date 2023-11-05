import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import MoviePage from './Pages/MoviePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}>
          <Route index element={<HomePage />}/>
          <Route path="/movie/:id" element={<MoviePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
