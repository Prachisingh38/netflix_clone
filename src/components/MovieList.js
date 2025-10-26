import React from "react";
import { useParams, Link } from "react-router-dom";

const movieDetails = {
  1: { title: "Inception", desc: "A thief enters dreams to steal secrets." },
  2: { title: "Interstellar", desc: "Explorers travel through a wormhole in space." },
  3: { title: "The Dark Knight", desc: "Batman faces the Joker in Gotham City." },
  4: { title: "Tenet", desc: "A secret agent manipulates time to prevent global catastrophe." },
  5: { title: "Avengers", desc: "Earth's mightiest heroes must band together." },
  6: { title: "Joker", desc: "A failed comedian becomes the infamous criminal." },
};

function MovieDetail() {
  const { id } = useParams();
  const movie = movieDetails[id];

  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <p>{movie.desc}</p>
      <Link to="/home">← Back to Home</Link>
    </div>
  );
}

export default MovieDetail;
