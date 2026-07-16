import React from "react";

const NotificationCard = ({ message, type }) => {
  return (
    <div>
      <h2>{message}</h2>
      <h3>
        {type === "Success"
          ? "✅"
          : type === "Warning"
          ? "⚠️"
          : "❌"}
      </h3>
    </div>
  );
};

export default NotificationCard;