import { styled } from "@mui/system";
const BoxMovie = styled('div')({
    position: 'relative',
    borderRadius: 4,
    width: 1/10,
    height: 'auto',
})

const MovieWrap = styled('div')({
    position: 'relative',
})

export default function MovieBox({movie}) {
    return (
        <MovieWrap>
            <BoxMovie>
                <img className="Image" alt="" src={`${process.env.REACT_APP_IMAGE_URL_PATH}${movie.backdrop_path}`}/>
                <span className="Title">{movie.title}</span>
                <span className="Rating">{movie.vote_average}</span>
            </BoxMovie>
        </MovieWrap>
    )
}