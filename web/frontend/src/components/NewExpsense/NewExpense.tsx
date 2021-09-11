import React, { useState } from "react";
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const NewExpense = (props: any) => {

  const saveExpenseDatahandler = (enterdExpenseData: any) => {
    const expenseData = {
        ...enterdExpenseData,
        id: Math.random().toString()
    }
    // console.log(expenseData)
    props.onAddExpense(expenseData)
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData= {saveExpenseDatahandler} />
    </div>
  );
};

export default NewExpense;
