import React, { useState } from "react";
import "./Expenses.css";

import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart'
import Card from "../UI/Card";
import { expensesProps, expenseitemProps } from "../../interface/expenseitemProps";

const Expenses = (props: expensesProps) => {
  const [filterdYear, setFilterdYear] = useState("2020");

  const filterChangeHandler = (selctedYear: string) => {
    console.log("inside Expense.tsx");
    setFilterdYear(selctedYear);
  };

  const filterExpenses: Array<expenseitemProps> = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterdYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart items = {filterExpenses}/>
      <ExpensesList items= { filterExpenses }/>
    </Card>
  );
};

export default Expenses;
