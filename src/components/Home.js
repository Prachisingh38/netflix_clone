import React from "react";
import './Home.css'; 

const movies = [
  { title: "Inception", img: "https://m.media-amazon.com/images/I/91od-FNSQrL._SL1500_.jpg", desc: "A thief who enters dreams to steal secrets." },
  { title: "Interstellar", img: "https://m.media-amazon.com/images/I/514zBLkyJcL._AC_SY300_SX300_QL70_FMwebp_.jpg", desc: "Exploring space and time to save humanity." },
  { title: "Avengers: Endgame", img: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_UF894,1000_QL80_.jpg", desc: "The Avengers assemble one final time." },
  { title: "Joker", img: "https://m.media-amazon.com/images/I/41HCcpaSAnL._SY300_SX300_QL70_FMwebp_.jpg", desc: "A man's descent into madness and chaos." },
  { title: "The Batman", img: "https://i.pinimg.com/736x/c5/c2/85/c5c285f153eb52e2bbcba5c51b5cd8d3.jpg", desc: "The dark knight returns to protect Gotham." },
];

function Home() {
  return (
    <div className="home">
      <h1>Featured Movies</h1>
      <div className="movie-grid">
        {movies.map((m, i) => (
          <div className="movie-card" key={i}>
            <img src={m.img} alt={m.title} />
            <h3>{m.title}</h3>
            <p>{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
