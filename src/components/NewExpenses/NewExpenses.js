import ExpensesForm from './ExpensesForm';
import './NewExpenses.css'

function NewExpenses(props){

    const onSaveExpenseDataHandler = (expenseData) => {
        props.onSaveExpenseDataHandler(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpensesForm onSaveExpenseDataHandler={onSaveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpenses;