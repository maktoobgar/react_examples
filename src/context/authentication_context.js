import { createContext, useState } from "react";

const AuthenticationContext = createContext({
	isLoggedIn: false,
	login: () => {},
	logout: () => {},
});

export const AuthenticationContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(
		sessionStorage.getItem("isLoggedIn") === "1"
	);

	const login = () => {
		setIsLoggedIn(true);
		sessionStorage.setItem("isLoggedIn", "1");
	};

	const logout = () => {
		setIsLoggedIn(false);
		sessionStorage.setItem("isLoggedIn", "0");
	};

	return (
		<AuthenticationContext.Provider
			value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
		>
			{props.children}
		</AuthenticationContext.Provider>
	);
};

export default AuthenticationContext;
