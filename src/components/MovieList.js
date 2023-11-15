import axios from "axios";
import { useEffect, useState } from "react";
import MovieBox from "./Box";
import { styled } from "@mui/system";
import { Button} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ListMovie = styled('div')({
  display: 'flex',
  width: '100%',
  position: 'relative',
  overflowX: 'scroll',
  overflowY: 'hidden',
  gap: 30,
})

const MovieRow = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: 'lightblue',
})

export default function MovieList({url}){
  const [movieList, setMovieList] = useState([]);
  const [moviePage, setMoviePage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const tag = url.split('/')[5];
  const navigate = useNavigate();
  const seeAll = () => navigate(`/movie/tag/${tag}`);
  
  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await axios.get(url, {params:{api_key: process.env.REACT_APP_API_KEY, page: moviePage}});
        setMovieList(response.data.results);
        setTotalPage(response.data.total_pages);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [url, moviePage])
  
  return(
    <MovieRow>
      <h2>{tag}</h2>
      <ListMovie>
        {movieList.map((movie) => {
          return(
            <MovieBox movie={movie}/>
          )
        })}
      </ListMovie>
      <Button onClick={seeAll} style={{backgroundColor:'blue', color: 'white', margin: '3px'}}>See All</Button>
    </MovieRow>
  )
}