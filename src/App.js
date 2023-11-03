import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';

function App() {
  return (
    <MovieList url="https://api.themoviedb.org/3/movie/popular"/>
  );
}

export default App;
