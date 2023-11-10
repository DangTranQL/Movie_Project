import { Button } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'

const MovieContent = styled('div')({
  display: 'flex',
})

const Actors = styled('div')({

})

export default function MoviePage() {
    const {movieId} = useParams();
    const [movieDetail, setMovieDetail] = useState()
    const [actorList, setActorList] = useState()

    useEffect(() => {
        const fetchData = async() => {
          try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/${movieId}`, {params:{api_key: process.env.REACT_APP_API_KEY, page: movieDetail}});
            const response2 = await axios.get(`${process.env.REACT_APP_URL}/${movieId}/credits`, {params:{api_key: process.env.REACT_APP_API_KEY, page: movieDetail}});
            setMovieDetail(response.data);
            setActorList(response2.data);
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();
      }, [movieId, movieDetail]);
    return(
        <MovieContent>
          <div>
            <img src={`${process.env.REACT_APP_IMAGE_URL_PATH}${movieDetail?.backdrop_path}`} style={{width: '30%', margin: '6px'}}/>
          </div>
          <div>
            <h2>{movieDetail?.title}</h2>
            <span>Genres: 
              {movieDetail.genres.map((genre) => {
                return(
                  <Button>genre.name</Button>
                )
              })}
            </span>
            <h1>Overview: {movieDetail.overview}</h1>
            <Actors>
              {actorList.cast.map((actor) => {
                return(
                  <div>
                    <img src={actor.profile_path}/>
                    <span>{actor.name}</span>
                    <span>{actor.character}</span>
                  </div>
                )
              })}
            </Actors>
          </div>
        </MovieContent>
    )
}
