import Goal from "./Goal";

const Goals = (props) => {
	const deleteGoal = (goal) => {
		props.deleteGoal(goal);
	};

	let goals = <p className="fs-5 text-center">No data exists</p>;
	if (props.goals.length !== 0) {
		goals = props.goals.map((element) => {
			return (
				<Goal
					goal={element.goal}
					key={element.id}
					id={element.id}
					deleteGoal={deleteGoal}
				/>
			);
		});
	}

	return (
		<div className="col-12 row g-2 m-3 p-3 border rounded border-primary">
			{goals}
		</div>
	);
};

export default Goals;
