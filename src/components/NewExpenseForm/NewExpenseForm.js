const NewExpenseForm = () => {
	return (
		<div className="fs-5 border rounded border-info p-3 my-1">
			<form>
				<div className="mb-4">
					<div className="row">
						<div className="col-6">
							<label for="title form-label">Title</label>
						</div>
						<div className="col-6">
							<label for="cost form-label">Cost</label>
						</div>

						<div className="col-6">
							<input
								className="form-control"
								type="text"
								name="title"
								id="title"
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
							/>
						</div>
					</div>
				</div>

				<div className="m-0">
					<div className="row">
						<div className="col-12">
							<label for="date form-label">Date</label>
						</div>

						<div className="col-6">
							<input
								className="form-control"
								type="date"
								name="date"
								id="date"
								min="2022-01-01"
								max="2023-12-25"
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
