import { useState } from "react";

const NewExpenseForm = (props) => {
	const [title, setTitle] = useState("");
	const [cost, setCost] = useState("");
	const [date, setDate] = useState("");

	const titleChangeHandler = (event) => {
		setTitle(event.target.value);
	};
	const costChangeHandler = (event) => {
		setCost(event.target.value);
	};
	const dateChangeHandler = (event) => {
		setDate(event.target.value);
	};
	const clearForm = () => {
		setTitle("");
		setCost("");
		setDate("");
	};
	const submitHandler = (event) => {
		event.preventDefault();

		const data = {
			title: title,
			cost: cost,
			date: new Date(date),
		};

		props.addNewExpense(data);
		clearForm();
	};

	return (
		<div className="fs-5 border rounded border-info p-3 my-1">
			<form onSubmit={submitHandler}>
				<div className="mb-4">
					<div className="row">
						<div className="col-6">
							<label htmlFor="title" className="form-label">
								Title
							</label>
						</div>
						<div className="col-6">
							<label htmlFor="cost" className="form-label">
								Cost
							</label>
						</div>

						<div className="col-6">
							<input
								className="form-control"
								type="text"
								name="title"
								id="title"
								value={title}
								onChange={titleChangeHandler}
							/>
						</div>
						<div className="col-6">
							<input
								className="form-control"
								type="number"
								name="cost"
								id="cost"
								min="0.01"
								step="0.01"
								value={cost}
								onChange={costChangeHandler}
							/>
						</div>
					</div>
				</div>

				<div className="m-0">
					<div className="row">
						<div className="col-12">
							<label htmlFor="date" className="form-label">
								Date
							</label>
						</div>

						<div className="col-6">
							<input
								className="form-control"
								type="date"
								name="date"
								id="date"
								min={props.year + "-01-01"}
								max={props.year + "-12-25"}
								value={date}
								onChange={dateChangeHandler}
							/>
						</div>
						<div className="col-6">
							<div className="d-grid gap-2 h-100">
								<button className="btn btn-primary" type="submit">
									Submit
								</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default NewExpenseForm;
