import React, { useEffect } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import { styled } from '@mui/system';
import PrimarySearchAppBar from '../components/Search';

const PageHome = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
})

export default function HomePage() {
  return (
    <PageHome>
      <PrimarySearchAppBar/>
      <MovieList url="https://api.themoviedb.org/3/movie/popular"/>
      <MovieList url="https://api.themoviedb.org/3/movie/now_playing"/>
      <MovieList url="https://api.themoviedb.org/3/movie/top_rated"/>
    </PageHome>
  );
}
