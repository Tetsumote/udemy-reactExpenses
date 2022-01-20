import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [expendForm, setExpendForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setExpendForm(false);
  };

  const onClickAddExpense = () => {
    setExpendForm(true);
  };

  const onClickStopExpense = () => {
    setExpendForm(false);
  };

  return (
    <div className="new-expense">
      {!expendForm && <button onClick={onClickAddExpense}>AddExpense</button>}
      {expendForm && (
        <ExpenseForm
          cancelExpanses={onClickStopExpense}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
