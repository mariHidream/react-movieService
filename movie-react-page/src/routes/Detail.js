import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const {id} = useParams();
    const [movie, getMovie] = useState([]);
    const [loading, getLoading] = useState(false)
   
    const getMovies = async () => {
        const json = await ( 
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(movie);
        getMovie(json.data.movie);
        getLoading(true)
    }
    useEffect(() => {
        getMovies();
    },[])

    return (
        <>
        <div style={{padding:20}}>
            <h1>{ loading ? movie.title_long : 'loading....' }  </h1>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <p>{movie.description_full}</p>
        </div>
        </>
    );
};

export default Detail;