import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  const { deleteTransactions } = useContext(GlobalContext);

  return (
    <li
      className={transaction.amount > 0 ? "plus" : "minus"}
      key={transaction.id}
    >
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => {
          deleteTransactions(transaction.id);
        }}
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
