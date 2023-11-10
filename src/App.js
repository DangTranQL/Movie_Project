import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import MoviePage from './Pages/MoviePage';
import TagPage from './Pages/TagPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<HomePage />}/>
          <Route path="/movie/:movieId" element={<MoviePage/>}/>
          <Route path="/movie/:tag" element={<TagPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
