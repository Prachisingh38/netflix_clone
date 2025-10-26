import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/movies/${id}`).then((res) => setMovie(res.data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="details">
      <img src={movie.image} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
    </div>
  );
}
