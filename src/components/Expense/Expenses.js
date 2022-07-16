import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

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
			{props.data.map((element) => {
				return (
					<ExpenseItem
						key={element.id}
						title={element.title}
						date={element.date}
						cost={element.cost}
					/>
				);
			})}
		</div>
	);
};

export default Expenses;
