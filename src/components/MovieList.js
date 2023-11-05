import axios from "axios";
import { useEffect, useState } from "react";
import MovieBox from "./Box";
import { styled } from "@mui/system";
import { Pagination } from "@mui/material";

const ListMovie = styled('div')({
  display: 'flex',
  width: '100%',
  position: 'relative',
  overflowX: 'scroll',
  overflowY: 'hidden',
  gap: 30,
})

const MoviePagination = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
})

export default function MovieList({url}){
  const [movieList, setMovieList] = useState([]);
  const [moviePage, setMoviePage] = useState(1);
  let totalPage = 0;

  useEffect(() => {
    console.log(process.env.REACT_APP_API_KEY)
    const fetchData = async() => {
      try {
        const response = await axios.get(url, {params:{api_key: process.env.REACT_APP_API_KEY, page: moviePage}});
        setMovieList(response.data.results);
        totalPage = response.data.total_pages;
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [url, moviePage])
  
  return(
    <MoviePagination>
      <ListMovie>
        {movieList.map((movie) => {
          return(
            <MovieBox movie={movie}/>
          )
        })}
      </ListMovie>
      <Pagination count={totalPage} onChange={(e, page) => {
        setMoviePage(page)
      }}/>
    </MoviePagination>
  )
}