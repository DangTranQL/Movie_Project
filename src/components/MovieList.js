import axios from "axios";
import { useEffect, useState } from "react";
import MovieBox from "./Box";
import { styled } from "@mui/system";

const listMovie = styled('div')({
  display: 'flex'
})

export default function MovieList({url}){
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    console.log(process.env.REACT_APP_API_KEY)
    const fetchData = async() => {
      try {
        const response = await axios.get(url, {params:{api_key: process.env.REACT_APP_API_KEY}});
        setMovieList(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [url])
  
  return(
    <listMovie>
      {movieList.map((movie) => {
        return(
          <MovieBox movie={movie}/>
        )
      })}
    </listMovie>
  )
}