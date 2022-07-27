import { useContext } from "react";
import { createPortal } from "react-dom";
import AuthenticationContext from "../../context/authentication_context";

const AuthenticationHeader = (props) => {
	const ctx = useContext(AuthenticationContext);

	return createPortal(
		<div className="flex header">
			<div className="header-title">Just a typical website</div>
			{ctx.isLoggedIn && (
				<ul className="flex">
					<li className="button margin-x-1">Users</li>
					<li className="button margin-x-1">Admin</li>
					<li className="button button-danger margin-x-1" onClick={ctx.logout}>
						Logout
					</li>
				</ul>
			)}
		</div>,
		document.getElementById("header")
	);
};

export default AuthenticationHeader;
