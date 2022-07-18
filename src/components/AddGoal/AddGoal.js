import { useState } from "react";

const AddGoal = (props) => {
	const [goal, setGoal] = useState("");

	const goalChangedHandler = (event) => {
		setGoal(event.target.value);
	};

	const addGoalClickHandler = (event) => {
		props.addGoal({ goal: goal });
		setGoal("");
	};

	return (
		<div className="row col-12 m-3 p-3 border rounded border-primary">
			<label className="col-12 p-0 m-0 form-label" htmlFor="goal">
				Course Goal
			</label>
			<input
				className="col-12 form-control mb-2"
				type="text"
				name="goal"
				id="goal"
				value={goal}
				onChange={goalChangedHandler}
			/>
			<button className="col-12 btn btn-danger" onClick={addGoalClickHandler}>
				Add Goal
			</button>
		</div>
	);
};

export default AddGoal;
