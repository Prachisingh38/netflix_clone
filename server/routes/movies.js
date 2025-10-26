import express from "express";
const router = express.Router();

const movies = [
  { id: 1, title: "Inception", image: "https://i.imgur.com/Ef1d4Ft.jpeg", description: "A thief who steals corporate secrets using dream-sharing technology." },
  { id: 2, title: "Interstellar", image: "https://i.imgur.com/q7JQG4t.jpeg", description: "A team travels through a wormhole in space to ensure humanity’s survival." },
  { id: 3, title: "The Dark Knight", image: "https://i.imgur.com/8UG2nV1.jpeg", description: "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham into anarchy." },
  { id: 4, title: "Avengers: Endgame", image: "https://i.imgur.com/yoz3FXq.jpeg", description: "The Avengers assemble once more to undo Thanos’s actions." },
  { id: 5, title: "The Matrix", image: "https://i.imgur.com/6gQF4CB.jpeg", description: "A computer hacker learns about the true nature of his reality." },
  { id: 6, title: "Titanic", image: "https://i.imgur.com/INs7Tvj.jpeg", description: "A romance blossoms aboard the ill-fated RMS Titanic." }
];

router.get("/", (req, res) => res.json(movies));

router.get("/:id", (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  movie ? res.json(movie) : res.status(404).json({ error: "Movie not found" });
});

export default router;
