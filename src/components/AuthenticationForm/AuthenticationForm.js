import { useReducer, useState } from "react";
import AuthenticationHeader from "../AuthenticationHeader/AuthenticationHeader";
import styles from "./AuthenticationForm.module.css";

const ActionType = {
	USER_INPUT: 0,
	LOST_FOCUS: 1,
	MAKE_EMPTY: 2,
};
Object.freeze(ActionType);

const emailReducer = (prevState, action) => {
	if (action.type === ActionType.USER_INPUT) {
		return {
			value: action.value,
			isValid: action.value.includes("@"),
		};
	} else if (action.type === ActionType.LOST_FOCUS) {
		return {
			value: prevState.value,
			isValid: prevState.value.includes("@"),
		};
	} else if (action.type === ActionType.MAKE_EMPTY) {
		return {
			value: "",
			isValid: true,
		};
	}
};

const passwordReducer = (prevState, action) => {
	if (action.type === ActionType.USER_INPUT) {
		return {
			value: action.value,
			isValid: action.value.length > 6,
		};
	} else if (action.type === ActionType.LOST_FOCUS) {
		return {
			value: prevState.value,
			isValid: prevState.value.length > 6,
		};
	} else if (action.type === ActionType.MAKE_EMPTY) {
		return {
			value: "",
			isValid: true,
		};
	}
};

const AuthenticationForm = () => {
	const [emailState, setEmailState] = useReducer(emailReducer, {
		value: "",
		isValid: true,
	});
	const [passwordState, setPasswordState] = useReducer(passwordReducer, {
		value: "",
		isValid: true,
	});

	const [isLoggedIn, setIsLoggedIn] = useState(
		sessionStorage.getItem("isLoggedIn") === "1"
	);

	const submitClickedHandler = (event) => {
		event.preventDefault();

		setIsLoggedIn(true);
		sessionStorage.setItem("isLoggedIn", "1");

		setEmailState({ type: ActionType.MAKE_EMPTY });
		setPasswordState({ type: ActionType.MAKE_EMPTY });
	};

	const logout = () => {
		setIsLoggedIn(false);
		sessionStorage.setItem("isLoggedIn", "0");
	};

	const isFormValid = () => {
		return (
			emailState.isValid &&
			passwordState.isValid &&
			emailState.value.length > 0 &&
			passwordState.value.length > 0
		);
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
										!emailState.isValid && styles.error
									}`}
									type="text"
									id="email"
									value={emailState.value}
									onChange={(event) => {
										setEmailState({
											type: ActionType.USER_INPUT,
											value: event.target.value,
										});
									}}
									onBlur={() => {
										setEmailState({ type: ActionType.LOST_FOCUS });
									}}
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
										!passwordState.isValid && styles.error
									}`}
									type="password"
									id="password"
									value={passwordState.value}
									onChange={(event) => {
										setPasswordState({
											type: ActionType.USER_INPUT,
											value: event.target.value,
										});
									}}
									onBlur={() => {
										setPasswordState({ type: ActionType.LOST_FOCUS });
									}}
								/>
							</div>
							<div className="flex justify-content-center">
								<button className="button px-5" disabled={!isFormValid()}>
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
