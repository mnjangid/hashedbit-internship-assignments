import movies from "../data/movies";
import MovieCard from "../components/MovieCard";
import "../App.css";

function Home() {

  return (

    <div>

      <h1>Movies</h1>

      <div className="grid">

        {
          movies.map(movie=>(
            <MovieCard key={movie.id} movie={movie}/>
          ))
        }

      </div>

    </div>

  );

}

export default Home;