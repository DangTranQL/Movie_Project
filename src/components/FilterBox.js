import { styled } from "@mui/system";
import { useHref, useNavigate } from "react-router-dom";
import MoviePage from "../Pages/MoviePage";
const BoxMovie = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: '80%',
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
    position: 'absolute',
    top: '60%',
    borderRadius: '50%',
    display: 'inline-block',
    borderWidth: 4,
    borderColor: 'green',
    borderStyle: 'solid',
    color: 'white',
    backgroundColor: 'black',
    fontSize: '100%',
    fontWeight: 'bold',
    margin: -10,
    padding: 5,
})

export default function FilterBox({movie}) {
    const navigate = useNavigate();
    const handleClick = () => navigate(`/movie/${movie.id}`);
    return (
        <MovieWrap>
            <BoxMovie onClick={handleClick}>
                <Image src={`${process.env.REACT_APP_IMAGE_URL_PATH}${movie.backdrop_path}`}/>
                <Title className="Title">{movie.title}</Title>
                <Rating className="Rating">{movie.vote_average.toFixed(1)}</Rating>
            </BoxMovie>
        </MovieWrap>
    )
}