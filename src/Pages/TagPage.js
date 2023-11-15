import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieBox from "../components/Box";
import { Button, List, ListItem, ListItemButton, ListItemText, Pagination } from "@mui/material";
import { useParams } from "react-router-dom";
import PrimarySearchAppBar from "../components/Search";
import FilterBox from "../components/FilterBox";

const ListMovie = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
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

export default function TagPage() {
    const [movieList, setMovieList] = useState([]);
    const [moviePage, setMoviePage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [genres, setGenres] = useState([])

    const {tag} = useParams();

    const url = `${process.env.REACT_APP_URL}/${tag}`;

    let genresList = [];

    const urlgenres = 'https://api.themoviedb.org/3/genre/movie/list'
    
    useEffect(() => {
        const fetchData = async() => {
        try {
            const response = await axios.get(url, {params:{api_key: process.env.REACT_APP_API_KEY, page: moviePage}});
            const response_genres = await axios.get(urlgenres, {params:{api_key: process.env.REACT_APP_API_KEY}});
            setMovieList(response.data.results);
            setTotalPage(response.data.total_pages);
            setGenres(response_genres.data.genres)
        } catch (error) {
            console.log(error);
        }
        }
        fetchData();
    }, [url, moviePage])

    let checkSubset = (parentArray, subsetArray) => {
        return subsetArray.every((el) => {
            return parentArray.includes(el)
        })
    }

    return(
        <div>
            <PrimarySearchAppBar/>
            <div style={{display: 'flex', overflowX: 'hidden'}}>
                <List>
                    {genres.map((genre) => (
                        <ListItem key={genre.name} disablePadding>
                        <ListItemButton onClick={() => {
                            genresList.push(genre.id)
                        }}>
                            <ListItemText primary={genre.name} />
                        </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <MovieRow>
                    <ListMovie>
                        {movieList.map((movie) => {
                            if (genresList.length === 0){
                                return(
                                    <FilterBox movie={movie}/>
                                )
                            }
                            else{
                                if (checkSubset(movie.genre_ids, genresList)){
                                    return(
                                        <FilterBox movie={movie}/>
                                    )
                                }
                            } 
                        })}
                    </ListMovie>
                    <Pagination count={totalPage} onChange={(e, page) => {
                        setMoviePage(page)
                    }}/>
                </MovieRow>
            </div>
        </div>
    )
}