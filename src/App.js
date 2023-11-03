import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';
import { styled } from '@mui/system';

const listMovie = styled('div')({
  display: 'flex'
})

const urlList = ["/popular", "/airing_today", "/top_rated"]

function App() {
  return (
    <listMovie>
      <MovieList url="https://api.themoviedb.org/3/movie/popular"/>
    </listMovie>
  );
}

export default App;
