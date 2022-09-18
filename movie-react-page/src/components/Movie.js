import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 

const Movie = ({ item }) => {
    const {medium_cover_image, title, summary, genres} = item
    return (
        <div> 
            <img src={medium_cover_image} alt={title}/>
            <h2>
                <Link to="/movie"> { title } </Link>
            </h2>
            <p>{summary}</p>
            <ul>
                { genres.map(g => <li key={g}>{g}</li>) }
            </ul>
        </div>
    );
};

Movie.prototype = {
    medium_cover_image : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired, 
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;