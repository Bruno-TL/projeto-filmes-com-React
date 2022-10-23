import { Link } from "react-router-dom";
import {FaStar} from "react-icons/fa"

const imageURL = import.meta.env.VITE_IMG;

//  Criando o  card de cada filme . 
const MovieCard = ({ movie, showLink = true }) => {
    return (
        <div className="movie-card">
            {/* Pegando a urlk de cada imagem */}
            <img src={imageURL + movie.poster_path} alt={movie.title}/>
            {/* O titulo do filme */}
            <h2>{movie.title}</h2>
            <p>
                {/* O icone estrela */}
                <FaStar/> {movie.vote_awerage}
            </p>

            {/* O link/tag A que ao clilcar leva para a página detahles */}
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    )
}

export default MovieCard;