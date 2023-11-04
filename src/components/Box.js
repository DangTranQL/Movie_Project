import { styled } from "@mui/system";
const BoxMovie = styled('div')({
    borderRadius: 4,
})

const MovieWrap = styled('div')({
    width: '20%',
})

const Image = styled('img')({
    width: '100%',
})

export default function MovieBox({movie}) {
    return (
        <MovieWrap>
            <BoxMovie>
                <Image alt="" src={`${process.env.REACT_APP_IMAGE_URL_PATH}${movie.backdrop_path}`}/>
                <span className="Title">{movie.title}</span>
                <span className="Rating">{movie.vote_average}</span>
            </BoxMovie>
        </MovieWrap>
    )
}