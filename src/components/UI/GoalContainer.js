import { useState } from "react";
import AddGoal from "../AddGoal/AddGoal";
import Goals from "../Goal/Goals";

const GoalContainer = () => {
	const [goals, setGoals] = useState([]);

	const addGoal = (goal) => {
		goal["id"] = Math.floor(Math.random() * 10000).toString();
		setGoals([...goals, goal]);
	};

	const deleteGoal = (goal) => {
		setGoals(
			goals.filter((element) => {
				return element.id !== goal.id;
			})
		);
	};

	return (
		<div className="container vh-100">
			<div className="row h-100 align-content-center">
				<AddGoal addGoal={addGoal} />
				<Goals deleteGoal={deleteGoal} goals={goals} />
			</div>
		</div>
	);
};

export default GoalContainer;
