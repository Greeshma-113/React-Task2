import React from "react";

const GymMemberCard = ({ name, expired }) => {
  return (
    <div>
      <h2>{name}</h2>
      {expired && <h3>Membership Expired</h3>}
    </div>
  );
};

export default GymMemberCard;