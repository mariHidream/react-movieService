import {useEffect, useState } from 'react';
import Movie from '../components/Movie';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [movies,  setMovies] = useState([]);
    const getMoivies = async () => {
      const response = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)).json()
      setMovies(response.data.movies)
      setLoading(false)
    }
    useEffect(() => {
      // * https://yts.mx/api 
      getMoivies();
    },[])
    return (
      <div>
        { loading ? (
           <h1>Loading...</h1> 
        ) : (
          <div>
              { movies.map((movie) => (
                  <Movie key={movie.id} item={movie}/>
              ))}
          </div>
        )}
      </div>
    );
};

export default Home;