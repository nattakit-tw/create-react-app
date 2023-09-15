import "./ExpensesForm.css";
function ExpensesForm() {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2023-01-01" max="2050-01-01" />
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input type="string" />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" step="0.01" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Save Expense</button>
      </div>
    </form>
  );
}

export default ExpensesForm;
