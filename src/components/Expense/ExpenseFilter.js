const ExpenseFilter = (props) => {
	const yearChangedHandler = (event) => {
		props.changeItemsBasedOnYear(event.target.value);
	};

	return (
		<select
			value={props.year}
			onChange={yearChangedHandler}
			className="form-control mb-3"
			name="year"
			id="year"
		>
			<option value="2015">2015</option>
			<option value="2016">2016</option>
			<option value="2017">2017</option>
			<option value="2018">2018</option>
			<option value="2019">2019</option>
			<option value="2020">2020</option>
			<option value="2021">2021</option>
			<option value="2022">2022</option>
		</select>
	);
};

export default ExpenseFilter;
