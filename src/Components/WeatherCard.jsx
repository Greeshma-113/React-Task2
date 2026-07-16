import React from "react";

const WeatherCard = ({ city, temperature }) => {
  return (
    <div
      style={{
        backgroundColor:
          temperature > 35
            ? "red"
            : temperature >= 20
            ? "lightgreen"
            : "lightblue",
        padding: "20px",
      }}
    >
      <h2>{city}</h2>
      <p>{temperature}°C</p>
    </div>
  );
};

export default WeatherCard;