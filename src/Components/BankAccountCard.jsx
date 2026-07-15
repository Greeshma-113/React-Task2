import React from "react";

const BankAccountCard = ({ name, balance }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Balance: ₹{balance}</p>
      {balance < 1000 && <h3>Minimum Balance Warning</h3>}
    </div>
  );
};

export default BankAccountCard;