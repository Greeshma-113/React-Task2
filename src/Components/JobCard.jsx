import React from "react";

const JobCard = ({ company, vacancies }) => {
  return (
    <div>
      <h2>{company}</h2>
      {vacancies > 0 && <h3>Actively Hiring</h3>}
    </div>
  );
};

export default JobCard;