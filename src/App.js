import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import MoviePage from './Pages/MoviePage';
import TagPage from './Pages/TagPage';
import SearchPage from './Pages/SeachPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<HomePage />}/>
          <Route path="/movie/:movieId" element={<MoviePage/>}/>
          <Route path="/movie/tag/:tag" element={<TagPage/>}/>
          <Route path="/movie/search/:keyword" element={<SearchPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
