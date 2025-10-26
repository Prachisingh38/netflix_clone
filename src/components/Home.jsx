import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/movies").then((res) => setMovies(res.data));
  }, []);

  return (
    <div className="home">
      <h1>Netflix Clone</h1>
      <div className="movie-grid">
        {movies.map((m) => (
          <Link to={`/movie/${m.id}`} key={m.id} className="movie-card">
            <img src={m.image} alt={m.title} />
            <p>{m.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
