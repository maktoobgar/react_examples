import { useRef } from "react";

const NewExpenseForm = (props) => {
	const titleRef = useRef();
	const costRef = useRef();
	const dateRef = useRef();

	const clearForm = () => {
		titleRef.current.value = "";
		costRef.current.value = "";
		dateRef.current.value = "";
	};
	const submitHandler = (event) => {
		event.preventDefault();

		const data = {
			title: titleRef.current.value,
			cost: costRef.current.value,
			date: new Date(dateRef.current.value),
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
								ref={titleRef}
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
								ref={costRef}
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
								ref={dateRef}
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
