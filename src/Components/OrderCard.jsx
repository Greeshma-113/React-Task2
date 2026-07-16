import React from "react";

const OrderCard = ({ orderId, status }) => {
  return (
    <div>
      <h2>{orderId}</h2>
      <h3
        style={{
          color:
            status === "Pending"
              ? "orange"
              : status === "Shipped"
              ? "blue"
              : "green",
        }}
      >
        {status}
      </h3>
    </div>
  );
};

export default OrderCard;