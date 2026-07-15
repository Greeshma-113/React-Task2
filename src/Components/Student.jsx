import React from 'react'

const Student = ({ Name, Age, Course }) => {
  return (
    <div className="card">
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {Name}</p>
      <p><strong>Age:</strong> {Age}</p>
      <p><strong>Course:</strong> {Course}</p>
    </div>
  )
}

export default Student