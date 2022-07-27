import { useRef, useState } from "react";
import AuthenticationHeader from "../AuthenticationHeader/AuthenticationHeader";

const AuthenticationForm = () => {
	const emailRef = useRef();
	const passwordRef = useRef();

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const submitClickedHandler = (event) => {
		event.preventDefault();

		setIsLoggedIn(true);
		emailRef.current.value = "";
		passwordRef.current.value = "";
	};

	const logout = () => {
		setIsLoggedIn(false);
	};

	return (
		<>
			<AuthenticationHeader isLoggedIn={isLoggedIn} logout={logout} />
			<div className="box margin-y-1">
				<form className="p-5" onSubmit={submitClickedHandler}>
					{!isLoggedIn && (
						<>
							<div className="flex pb-3">
								<label className="font-medium form-label w-25" htmlFor="email">
									Email
								</label>
								<input
									className="font-medium form-control w-75"
									type="text"
									id="email"
									ref={emailRef}
								/>
							</div>
							<div className="flex pb-3">
								<label
									className="font-medium form-label w-25"
									htmlFor="password"
								>
									Password
								</label>
								<input
									className="font-medium form-control w-75"
									type="password"
									id="password"
									ref={passwordRef}
								/>
							</div>
							<div className="flex justify-content-center">
								<button className="button px-5">Submit</button>
							</div>
						</>
					)}
					{isLoggedIn && (
						<h2 className="text-center" type="submit">
							Welcome Back
						</h2>
					)}
				</form>
			</div>
		</>
	);
};

export default AuthenticationForm;
