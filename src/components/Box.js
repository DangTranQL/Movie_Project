import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
const BoxMovie = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
})

const MovieWrap = styled('div')({
    width: '12%',
    height: 300,
    margin: '1.3%',
})

const Image = styled('img')({
    borderRadius: 8,
})

const Title = styled('span')({
    textOverflow: 'ellipsis',
})

const Rating = styled('span')({
    position: 'relative',
})

export default function MovieBox({movie}) {
    const navigate = useNavigate();
    const handleClick = () => navigate(`/movie/${movie.id}`);
    return (
        <MovieWrap>
            <BoxMovie onClick={handleClick}>
                <Image src={`${process.env.REACT_APP_IMAGE_URL_PATH}${movie.backdrop_path}`}/>
                <Title className="Title">{movie.title}</Title>
                <Rating className="Rating">Rating: {movie.vote_average.toFixed(1)}</Rating>
            </BoxMovie>
        </MovieWrap>
    )
}