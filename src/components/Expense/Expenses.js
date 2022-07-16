import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
	const changeItemsBasedOnYear = (year) => {
		props.updateYearOnUpperContainer(year);
	};

	return (
		<div className="p-2 border border-info rounded">
			<ExpenseFilter
				year={props.year}
				changeItemsBasedOnYear={changeItemsBasedOnYear}
			/>
			<ExpenseList data={props.data} />
		</div>
	);
};

export default Expenses;
