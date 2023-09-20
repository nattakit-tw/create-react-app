import React, { useState } from 'react';
import "./ExpensesForm.css";
function ExpensesForm() {

  const [enteredDate , setEnteredDate] = useState('');
  const [enteredTitle , setEnteredTitle] = useState('');
  const [enteredPrice , setEnteredPrice] = useState('');

  const enteredDateHandler = (event) => {
    setEnteredDate(event.target.value)
  }
  const enteredTitleHandler = (event) => {
    setEnteredTitle(event.target.value)
  }
  const enteredPriceHandler = (event) => {
    setEnteredPrice(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      date : new Date(enteredDate),
      title : enteredTitle,
      price : enteredPrice
    }
    console.log(expenseData);
    setEnteredDate('');
    setEnteredTitle('');
    setEnteredPrice('');
  }


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2023-01-01" value={enteredDate} max="2050-01-01" onChange={enteredDateHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input type="string" value={enteredTitle} onChange={enteredTitleHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" step="0.01" value={enteredPrice} onChange={enteredPriceHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Save Expense</button>
      </div>
    </form>
  );
}

export default ExpensesForm;
