import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state

const initialState = {
  transactions: [
    { id: 1, text: "Food", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Electric Bill", amount: -10 },
    { id: 4, text: "Gas Bill", amount: -50 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  const deleteTransactions = (id) => {
      dispatch({
          type: 'DELETE_TRANSACTION',
          payload: id
      });
  }

  const addTransactions = (transaction) => {
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
}

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions, deleteTransactions, addTransactions }}>
      {children}
    </GlobalContext.Provider>
  );
};

