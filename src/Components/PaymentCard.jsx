import React from "react";

const PaymentCard = ({ amount, paid }) => {
  return (
    <div>
      <h2>₹{amount}</h2>
      <h3>{paid ? "Paid" : "Pending Payment"}</h3>
    </div>
  );
};

export default PaymentCard;