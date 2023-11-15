import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieBox from "../components/Box";
import { Pagination } from "@mui/material";
import { useParams } from "react-router-dom";

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

export default function SearchPage() {
    const [movieList, setMovieList] = useState([]);
    const [moviePage, setMoviePage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const {keyword} = useParams();

    const url = `${process.env.REACT_APP_SEARCH}`;
    
    useEffect(() => {
        const fetchData = async() => {
        try {
            const response = await axios.get(url, {params:{api_key: process.env.REACT_APP_API_KEY, page: moviePage, query: keyword}});
            setMovieList(response.data.results);
            setTotalPage(response.data.total_pages);
        } catch (error) {
            console.log(error);
        }
        }
        fetchData();
    }, [url, moviePage, keyword])

    return(
        <MovieRow>
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
        </MovieRow>
    )
}