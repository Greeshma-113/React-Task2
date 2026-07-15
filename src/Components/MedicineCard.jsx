import React from "react";

const MedicineCard = ({ name, prescription }) => {
  return (
    <div>
      <h2>{name}</h2>
      {prescription && <h3>Prescription Required</h3>}
    </div>
  );
};

export default MedicineCard;