import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
import { expensesProps, expenseitemProps } from "../../interface/expenseitemProps";

const ExpensesList = (props: expensesProps) => {

  if (props.items.length == 0) {
    return <h2 className="expenses-list__fallback">No Expenses found.</h2>
  }

  return <ul className="expenses-list">
      {
          props.items.map((expense: expenseitemProps) => (
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
      }

  </ul>
}

export default ExpensesList