<<<<<<< HEAD
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
=======
import React from 'react'

const EmployeeCard = ({ name, designation, salary, department }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Designation: {designation}</p>
      <p>Salary: ₹{salary}</p>
      <p>Department: {department}</p>
    </div>
  )
}

export default EmployeeCard
>>>>>>> c29ac19aed97dec95daffffd90fafb0bf2df66d7
