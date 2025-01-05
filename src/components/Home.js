import React from "react";
import personalities from "../data/personalities";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container"> 
      <h1 className="home-title">Inspirational Personalities</h1>
      <div className="personality-cards">
        {personalities.map((person) => (
          <div className="card" key={person.id}>
            <img
              src={person.img}
              alt={person.name}
              className="person-image"
            />
            <div className="card-content">
              <h2>{person.name}</h2>
              <p>{person.born}</p>
              <Link to={`/story/${person.id}`} className="explore-btn">
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
