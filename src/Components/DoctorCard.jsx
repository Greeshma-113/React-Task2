import React from "react";

const DoctorCard = ({ name, available }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{available ? "Available Today" : "Not Available"}</h3>
    </div>
  );
};

export default DoctorCard;