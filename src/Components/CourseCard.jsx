import React from "react";

const CourseCard = ({ course, enrollments }) => {
  return (
    <div>
      <h2>{course}</h2>
      {enrollments > 1000 && <h3>Best Seller</h3>}
    </div>
  );
};

export default CourseCard;