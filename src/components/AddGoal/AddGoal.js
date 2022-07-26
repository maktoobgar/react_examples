import { useRef, useState } from "react";
import styles from "./AddGoals.module.css";

const AddGoal = (props) => {
	const goalRef = useRef();
	const [isGoalValid, setIsGoalValid] = useState(true);

	const goalChangedHandler = (event) => {
		if (!isGoalValid && event.target.value.trim().length !== 0) {
			setIsGoalValid(true);
		}
	};

	const addGoalClickHandler = () => {
		if (goalRef.current.value.trim().length === 0) {
			setIsGoalValid(false);
			return;
		}

		props.addGoal({ goal: goalRef.current.value.trim() });

		goalRef.current.value = "";
	};

	return (
		<div className="row col-12 m-3 p-3 border rounded border-primary">
			<label
				className={`col-12 p-0 m-0 form-label ${
					!isGoalValid && styles["invalid-label"]
				}`}
				htmlFor="goal"
			>
				Course Goal
			</label>
			<input
				className={`col-12 form-control mb-2 ${
					!isGoalValid && styles["invalid-input"]
				}`}
				type="text"
				name="goal"
				id="goal"
				ref={goalRef}
				onChange={goalChangedHandler}
			/>
			<button className="col-12 btn btn-danger" onClick={addGoalClickHandler}>
				Add Goal
			</button>
		</div>
	);
};

export default AddGoal;
