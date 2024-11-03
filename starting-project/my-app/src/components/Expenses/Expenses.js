import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

const Expenses = (props) => {
	const expenses = props.expenses;

	return (
		<Card className="expenses">
      		{expenses.map(expense => <ExpenseItem expense={expense}></ExpenseItem>)}
    	</Card>
	)
}

export default Expenses;