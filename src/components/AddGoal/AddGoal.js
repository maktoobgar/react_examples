import { useState } from "react";
import "./AddGoals.css";

const AddGoal = (props) => {
	const [goal, setGoal] = useState("");
	const [isGoalValid, setIsGoalValid] = useState(true);

	const goalChangedHandler = (event) => {
		if (event.target.value.trim().length !== 0) {
			setIsGoalValid(true);
		}

		setGoal(event.target.value.trim());
	};

	const addGoalClickHandler = () => {
		if (goal.trim().length === 0) {
			setIsGoalValid(false);
			return;
		}

		props.addGoal({ goal: goal.trim() });
		setGoal("");
	};

	return (
		<div className="row col-12 m-3 p-3 border rounded border-primary">
			<label
				className={`col-12 p-0 m-0 form-label ${
					!isGoalValid ? "invalid-label" : ""
				}`}
				htmlFor="goal"
			>
				Course Goal
			</label>
			<input
				className={`col-12 form-control mb-2 ${
					!isGoalValid ? "invalid-input" : ""
				}`}
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
