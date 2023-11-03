import { styled } from "@mui/system";
const BoxMovie = styled('div')({
    borderRadius: 4,
    width: 1/10,
    height: 'auto'
})

export default function MovieBox({movie}) {
    return (
        <BoxMovie>
            <img class="Image" alt="" src={`${process.env.REACT_APP_IMAGE_URL_PATH}${movie.backdrop_path}`}/>
            <span class="Title">{movie.title}</span>
            <span class="Rating">{movie.vote_average}</span>
        </BoxMovie>
    )
}