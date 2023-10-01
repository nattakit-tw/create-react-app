import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "../UI/ExpensesFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const expenses = props.expenses;
  const [year, setYear] = useState(2022);
  const handlerFilterChange = (year) => {
    setYear(parseInt(year));
  };
  const expensesList = expenses.filter((i) => i.date.getFullYear() === year);
  console.log(expensesList);

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter handlerFilterChange={handlerFilterChange} />
        <ExpenseChart expenses={expensesList}/>
        <ExpenseList expensesList={expensesList} />
      </Card>
    </li>
  );
}

export default Expenses;
