import { useEffect, useState } from "react";
import AuthenticationHeader from "../AuthenticationHeader/AuthenticationHeader";
import styles from "./AuthenticationForm.module.css";

const AuthenticationForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isFormValid, setIsFormValid] = useState(false);
	const [isEmailValid, setIsEmailValid] = useState(true);
	const [isPasswordValid, setIsPasswordValid] = useState(true);

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
		if (email.includes("@") && password.length > 6 && !isFormValid) {
			setIsFormValid(true);
		} else if (!email.includes("@") && !(password.length > 6) && isFormValid) {
			setIsFormValid(false);
		}

		if (email.length !== 0 && !email.includes("@") && isEmailValid) {
			setIsEmailValid(false);
		} else if (email.length !== 0 && email.includes("@") && !isEmailValid) {
			setIsEmailValid(true);
		}

		if (password.length !== 0 && !(password.length > 6) && isPasswordValid) {
			setIsPasswordValid(false);
		} else if (
			password.length !== 0 &&
			password.length > 6 &&
			!isPasswordValid
		) {
			setIsPasswordValid(true);
		}
	};

	useEffect(() => {
		const handler = setTimeout(() => {
			validateForm();
		}, 500);

		return () => {
			clearTimeout(handler);
		};
	}, [email, password]);

	useEffect(() => {
		const handler = setTimeout(() => {
			validateForm();
		}, 500);

		return () => {
			clearTimeout(handler);
		};
	}, [email]);

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
									className={`font-medium form-control w-75 ${
										!isEmailValid && !isFormValid && styles.error
									}`}
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
									className={`font-medium form-control w-75 ${
										!isPasswordValid && !isFormValid && styles.error
									}`}
									type="password"
									id="password"
									value={password}
									onChange={passwordChangedHandler}
								/>
							</div>
							<div className="flex justify-content-center">
								<button className="button px-5" disabled={!isFormValid}>
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
