import React from 'react'
import { unstable_HistoryRouter, useNavigate, useParams } from 'react-router-dom'

export default function MoviePage() {
    const movieId = useParams();
    console.log(movieId);
    return(
        <div>
            {movieId}
        </div>
    )
}
