import React from "react";

const StudentCard = ({ name, marks }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{marks}%</p>
      {marks > 95 && <h3>🏆 Scholarship</h3>}
    </div>
  );
};

export default StudentCard;