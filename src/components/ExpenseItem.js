import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
	return (
		<div class="col-12 g-0 row border border-info rounded p-3">
			<div class="col-xxl-10 col-xl-10 col-lg-10 col-md-9 col-sm-8 col-8">
				<div class="row">
					<div class="fs-4">{props.title}</div>
					<ExpenseDate date={props.date} />
				</div>
			</div>
			<div class="col">
				<div class="d-grid gap-2 h-100">
					<button class="btn btn-primary fs-5">${props.cost}</button>
				</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
