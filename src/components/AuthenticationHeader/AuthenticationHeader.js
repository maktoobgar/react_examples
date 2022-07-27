import ReactDom from "react-dom";

const AuthenticationHeaderContent = (props) => {
	return (
		<div className="flex header">
			<div className="header-title">Just a typical website</div>
			{props.isLoggedIn && (
				<ul className="flex">
					<li className="button margin-x-1">Users</li>
					<li className="button margin-x-1">Admin</li>
					<li
						className="button button-danger margin-x-1"
						onClick={props.logout}
					>
						Logout
					</li>
				</ul>
			)}
		</div>
	);
};

const AuthenticationHeader = (props) => {
	console.log(
		ReactDom.createPortal(
			<AuthenticationHeaderContent
				isLoggedIn={props.isLoggedIn}
				logout={props.logout}
			/>,
			document.getElementById("header")
		)
	);
	return ReactDom.createPortal(
		<AuthenticationHeaderContent
			isLoggedIn={props.isLoggedIn}
			logout={props.logout}
		/>,
		document.getElementById("header")
	);
};

export default AuthenticationHeader;
