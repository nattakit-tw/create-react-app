import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

function ExpenseList(props) {
  if (props.expensesList.length < 1) {
    return <h1 className="expenses-list__fallback">Have no any expense</h1>;
  }
  let expenseComponent = props.expensesList.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  return (
    <ul className="expenses-list">
        {expenseComponent}
    </ul>
  );
}


export default ExpenseList
