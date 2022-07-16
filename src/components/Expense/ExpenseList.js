import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
	let data = <p className="fs-5 text-center">No data found.</p>;
	if (props.data.length > 0) {
		data = props.data.map((element) => {
			return (
				<ExpenseItem
					key={element.id}
					title={element.title}
					date={element.date}
					cost={element.cost}
				/>
			);
		});
	}

	return data;
};

export default ExpenseList;
