import React from "react";

const MobileCard = ({ name, is5G }) => {
  return (
    <div>
      <h2>{name}</h2>
      {is5G && <h3>5G Supported</h3>}
    </div>
  );
};

export default MobileCard;