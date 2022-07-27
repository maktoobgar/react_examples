import { useEffect, useState } from "react";
import AuthenticationHeader from "../AuthenticationHeader/AuthenticationHeader";

const AuthenticationForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [formIsValid, setFormIsValid] = useState(false);

	const emailChangedHandler = (event) => {
		setEmail(event.target.value);
	};

	const passwordChangedHandler = (event) => {
		setPassword(event.target.value);
	};

	const [isLoggedIn, setIsLoggedIn] = useState(
		sessionStorage.getItem("isLoggedIn") === "1"
	);

	const validateForm = () => {
		console.log(email);
		if (email.includes("@") && password.length > 6 && !formIsValid) {
			setFormIsValid(true);
		} else if (formIsValid) {
			setFormIsValid(false);
		}
	};

	useEffect(() => {
		validateForm();
	}, [email, password]);

	const submitClickedHandler = (event) => {
		event.preventDefault();

		setIsLoggedIn(true);
		sessionStorage.setItem("isLoggedIn", "1");
		setEmail("");
		setPassword("");
	};

	const logout = () => {
		setIsLoggedIn(false);
		sessionStorage.setItem("isLoggedIn", "0");
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
									value={email}
									onChange={emailChangedHandler}
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
									value={password}
									onChange={passwordChangedHandler}
								/>
							</div>
							<div className="flex justify-content-center">
								<button className="button px-5" disabled={!formIsValid}>
									Submit
								</button>
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
