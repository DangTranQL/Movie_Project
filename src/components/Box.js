import { styled } from "@mui/system";
const BoxMovie = styled('div')({
    borderRadius: 4
})

export default function MovieBox({movie}) {
    return (
        <BoxMovie>
            <img src={`${process.env.REACT_APP_IMAGE_URL_PATH}${movie.backdrop_path}`}/>
        </BoxMovie>
    )
}