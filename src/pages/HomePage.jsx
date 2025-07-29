import React from "react";
import "../styles/HomePage.css"; // You can create this CSS file if it doesn't exist

const Home = () => {
  return (
    <div className="home-section">
      <h2>Featured Spacecraft</h2>
      <div className="spacecraft-feature">
        <img
          src="https://imgix.bustle.com/uploads/image/2020/12/29/35160251-9dbd-424a-8ddf-aca8321c1283-razorcresticeplanet-db.jpg"
          alt="Razor Crest"
          className="spacecraft-image"
        />
        <h3>Razor Crest</h3>
        <p>A Mandalorian bounty ship known for its resilience.</p>
      </div>

      <div className="stats">
        <p>🪐 Total Spacecraft: 6</p>
        <p>🌍 Active Planets: 3</p>
        <p>🚀 Missions Dispatched: 12</p>
      </div>

      <h2>🌟 Ship of the Week</h2>
      <div className="spacecraft-feature">
        <img
          src="https://cdn.mos.cms.futurecdn.net/uciG9WygFRtEDcvw9gitTd.jpg"
          alt="Millennium Falcon"
          className="spacecraft-image"
        />
        <h3>Millennium Falcon</h3>
        <p>
          The fastest hunk of junk in the galaxy. Famous for the Kessel Run in
          under 12 parsecs.
        </p>
      </div>
    </div>
  );
};

export default Home;
