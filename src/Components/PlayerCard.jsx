import React from "react";

const PlayerCard = ({ name, isCaptain }) => {
  return (
    <div>
      <h2>{name}</h2>
      {isCaptain && <h3>Captain</h3>}
    </div>
  );
};

export default PlayerCard;