import React from "react";

const QuizCard = ({ title, completed }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{completed ? "Completed" : "Not Attempted"}</h3>
    </div>
  );
};

export default QuizCard;