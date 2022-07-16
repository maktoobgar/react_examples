function ExpenseItem() {
	return (
		<div className="row border border-info rounded p-3">
			<div className="col-xxl-10 col-xl-10 col-lg-10 col-md-9 col-sm-8 col-8">
				<div className="row">
					<div className="fs-4">Car Insurance</div>
					<div className="fs-6 mt-1 text-muted">March 28th 2022</div>
				</div>
			</div>
			<div className="col">
				<div
					className="d-grid gap-2"
					style={{
						height: "100%",
					}}
				>
					<button className="btn btn-primary fs-5">$299</button>
				</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
