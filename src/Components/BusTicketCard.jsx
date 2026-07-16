import React from "react";

const BusTicketCard = ({ passenger, status }) => {
  return (
    <div>
      <h2>{passenger}</h2>
      <h3>{status}</h3>
    </div>
  );
};

export default BusTicketCard;