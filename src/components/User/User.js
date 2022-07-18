const User = (props) => {
	return (
		<li className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4">
			<div className="card bg-info m-3">
				<div className="card-header">{props.header}</div>
				<div className="card-body">
					<div className="card-text">{props.body}</div>
				</div>
			</div>
		</li>
	);
};

export default User;
