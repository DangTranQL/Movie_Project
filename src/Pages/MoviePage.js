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
    const [movieDetail, setMovieDetail] = useState({})
    const [actorList, setActorList] = useState({})

    useEffect(() => {
        const fetchData = async() => {
          try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/${movieId}`, {params:{api_key: process.env.REACT_APP_API_KEY}});
            const response2 = await axios.get(`${process.env.REACT_APP_URL}/${movieId}/credits`, {params:{api_key: process.env.REACT_APP_API_KEY}});
            console.log(response.data)
            setMovieDetail(response.data);
            setActorList(response2.data);
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();
      }, [movieId]);

    return(
        <div style={{margin: '4px'}}>
          <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
            <img src={`${process.env.REACT_APP_IMAGE_URL_PATH}${movieDetail?.backdrop_path}`} style={{width: '20%', margin: '6px'}}/>
          </div>
          <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
            <h2>{movieDetail.title}</h2>
            <span>Genres: 
              {movieDetail.genres?.map((genre) => {
                return(
                  <Button>{genre.name}</Button>
                )
              })}
            </span>
            <h3 style={{width: '70%'}}>Overview: {movieDetail?.overview}</h3>
            <Actors style={{display: 'flex', overflowX: 'scroll', width: '100%'}}>
              {actorList.cast?.map((actor) => {
                return(
                  <div style={{display: 'flex', flexDirection: 'column', margin: '4px'}}>
                    <img src={`	https://www.themoviedb.org/t/p/w276_and_h350_face${actor.profile_path}`} style={{width:'50%'}}/>
                    <span>{actor.name}</span>
                    <span>{actor.character}</span>
                  </div>
                )
              })}
            </Actors>
          </div>
        </div>
    )
}
