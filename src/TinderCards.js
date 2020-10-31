import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css";

function TinderCards() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const unsubscribe = database
      .collection("movies")
      .onSnapshot((snapshot) =>
        setMovies(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <div className="tinderCards__cardContainer">
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
    </div>
  );
}

export default TinderCards;
