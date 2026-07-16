import React from "react";
import StudentCard from "./StudentCard";
import EmployeeCard from "./EmployeeCard";
import ProductCard from "./ProductCard";
import CourseCard from "./CourseCard";
import MovieCard from "./MovieCard";

const Dashboard = () => {
  return (
    <>
      <StudentCard name="Bhavya" marks={98} />
      <EmployeeCard name="Ravi" experience={12} />
      <ProductCard name="Laptop" orderValue={700} />
      <CourseCard course="React" enrollments={2000} />
      <MovieCard name="Leo" rating="Adult" />
    </>
  );
};

export default Dashboard;