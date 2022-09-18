import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const {id} = useParams();
    const getMovies = async () => {
        const json = await ( 
            await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}`)
        ).json();
    }
    useEffect(() => {
        getMovies()
    },[])

    return (
        <h1> detail </h1>
    );
};

export default Detail;