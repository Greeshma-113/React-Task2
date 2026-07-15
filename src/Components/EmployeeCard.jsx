import React from "react";

const EmployeeCard = ({ name, experience }) => {
  return (
    <div>
      <h2>{name}</h2>
      {experience > 10 && <h3>Promotion Eligible</h3>}
    </div>
  );
};

export default EmployeeCard;