const Goal = (props) => {
	const goalClickHandler = (event) => {
		props.deleteGoal({ goal: event.target.textContent, id: event.target.id });
	};

	return (
		<button
			className="btn btn-info fs-5"
			onClick={goalClickHandler}
			id={props.id}
		>
			{props.goal}
		</button>
	);
};

export default Goal;
