import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';
import { styled } from '@mui/system';

const urlList = ["/popular", "/airing_today", "/top_rated"]

function App() {
  return (
    <div>
      <MovieList url="https://api.themoviedb.org/3/movie/popular"/>
      <MovieList url="https://api.themoviedb.org/3/movie/airing_today"/>
      <MovieList url="https://api.themoviedb.org/3/movie/top_rated"/>
    </div>
  );
}

export default App;
