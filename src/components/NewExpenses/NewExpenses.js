import ExpensesForm from './ExpensesForm';
import './NewExpenses.css'

function NewExpenses(props){

    const onSaveEapenseDataHandler = (expenseData) => {
        props.onSaveEapenseDataHandler(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpensesForm onSaveEapenseDataHandler={onSaveEapenseDataHandler}/>
        </div>
    );
}

export default NewExpenses;