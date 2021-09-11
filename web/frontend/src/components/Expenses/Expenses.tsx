import React, { useState } from "react"
import './Expenses.css'
import ExpenseItem from "./ExpenseItem"
import ExpenseFilter from './ExpenseFilter'
import Card from '../UI/Card'
import { expensesProps }  from '../../interface/expenseitemProps'

const Expenses = (props :expensesProps) => {

  const [filterdYear, setFilterdYear] = useState('2020')
  
  const filterChangeHandler = (selctedYear :string) => {
    console.log('inside Expense.tsx')
    setFilterdYear(selctedYear)

  }
  return (
    <Card className="expenses">
      <ExpenseFilter selected = {filterdYear} onChangeFilter= {filterChangeHandler}/>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
