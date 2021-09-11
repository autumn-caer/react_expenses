import React, { useState } from "react";

import "./ExpenseForm.css";
const ExpenseForm = (props: any) => {
  const [enteredTtitle, setEnteredTtitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event: any) => {
    setEnteredTtitle(event.target.value)
  }

  const amountChangeHandler = (event: any) => {
    setEnteredAmount(event.target.value)
  };

  const dateChangeHandler = (event: any) => {
    setEnteredDate(event.target.value)
  };

  const submitHandler = (event: any) => {
    event.preventDefault()

    const expenesData = {
      title: enteredTtitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }

    // console.log(expenesData)
    // console.log(props)
    props.onSaveExpenseData(expenesData)
    setEnteredTtitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <form onSubmit= { submitHandler }>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTtitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
