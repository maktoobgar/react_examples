import Expenses from "../Expense/Expenses";
import NewExpenseForm from "../NewExpenseForm/NewExpenseForm";

const Container = () => {
	return (
		<div className="container vh-100">
			<div className="row h-100 align-content-center">
				<NewExpenseForm />
				<Expenses />
			</div>
		</div>
	);
};

export default Container;
