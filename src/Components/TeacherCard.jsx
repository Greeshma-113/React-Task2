import React from "react";

const TeacherCard = ({ name, designation }) => {
  return (
    <div>
      <h2>{name}</h2>
      {designation === "Head of Department" && <h3>HOD</h3>}
    </div>
  );
};

export default TeacherCard;