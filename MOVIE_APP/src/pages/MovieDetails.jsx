import { useParams, Link } from "react-router-dom";
import movies from "../data/movies";

function MovieDetails() {
  const { id } = useParams();

  const movie = movies.find((m) => m.id === Number(id));

  return (
    <div>
      <img src={movie.image} width="250" />

      <h1>{movie.title}</h1>

      <p>{movie.description}</p>

      <Link to={`/booking/${movie.id}`}>
        <button>Book Seat</button>
      </Link>
    </div>
  );
}

export default MovieDetails;
