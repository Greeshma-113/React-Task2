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