import React from "react";

const TaskCard = ({ task, priority }) => {
  return (
    <div>
      <h2>{task}</h2>
      <h3>{priority}</h3>
    </div>
  );
};

export default TaskCard;