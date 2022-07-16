const ExpenseDate = (props) => {
	const year = props.date.getFullYear();
	const month = props.date.toLocaleString("en-US", { month: "short" });
	const day = props.date.toLocaleString("en-US", { day: "2-digit" });

	return (
		<div className="fs-6 mt-1 text-muted">
			{year}-{month}-{day}
		</div>
	);
};

export default ExpenseDate;
