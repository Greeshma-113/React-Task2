import React from "react";

const SubscriptionCard = ({ user, status }) => {
  return (
    <div>
      <h2>{user}</h2>
      <h3>{status}</h3>
    </div>
  );
};

export default SubscriptionCard;