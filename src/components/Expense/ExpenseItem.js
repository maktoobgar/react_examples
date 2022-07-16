import { useState } from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);

	const costButtonClickHandler = () => {
		setTitle("newTitle");
		console.log(title);
	};

	return (
		<div className="col-12 g-0 row border border-info rounded p-3 my-1">
			<div className="col-xxl-10 col-xl-10 col-lg-10 col-md-9 col-sm-8 col-8">
				<div className="row">
					<div className="fs-4">{title}</div>
					<ExpenseDate date={props.date} />
				</div>
			</div>
			<div className="col">
				<div className="d-grid gap-2 h-100">
					<button
						className="btn btn-primary fs-5"
						onClick={costButtonClickHandler}
					>
						${props.cost}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ExpenseItem;
