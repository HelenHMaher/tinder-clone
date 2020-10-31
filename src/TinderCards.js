import React, { useState } from "react";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [movies, setMovies] = useState([
    {
      title: "Old Boy",
      url:
        "https://movieswithaplottwist.com/wp-content/uploads/2016/04/old-boy-movie-poster.jpg",
    },
    {
      title: "12 Angry Men",
      url:
        "https://tvguide1.cbsistatic.com/rovi/showcards/movie/121377/thumbs/16796900_1300x1733.jpg",
    },
    {
      title: "Peter and the Wolf",
      url:
        "https://alchetron.com/cdn/Peter-and-the-Wolf-1946-film-images-d487e498-4135-443a-8f80-b90bbf3ad47.jpg",
    },
  ]);

  return (
    <div>
      <h2>TinderCards</h2>

      {movies.map((movie) => (
        <TinderCard
          className="swipe"
          key={movie.title}
          preventSwipe={["up", "down"]}
        >
          <div
            style={{ backgroundImage: `url(${movie.url})` }}
            className="card"
          >
            <h3>{movie.title}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default TinderCards;
