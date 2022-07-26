import { useRef, useState } from "react";
import Error from "../UI/Error";
import styles from "./AddUsers.module.css";

const AddUser = (props) => {
	const usernameRef = useRef();
	const ageRef = useRef();
	const [isUsernameSafe, setIsUsernameSafe] = useState(true);
	const [isAgeSafe, setIsAgeSafe] = useState(true);
	const [error, setError] = useState(null);

	const usernameChangedHandler = (event) => {
		if (!isUsernameSafe && event.target.value.trim().length !== 0) {
			console.log(event.target.value.trim().length);
			setIsUsernameSafe(true);
		}
	};

	const ageChangedHandler = (event) => {
		if (!isAgeSafe && !isNaN(event.target.value.trim())) {
			setIsAgeSafe(true);
		}
	};

	const isItAllSafe = () => {
		let everythingIsFine = true;

		if (isNaN(ageRef.current.value) || ageRef.current.value.length === 0) {
			setError({
				title: "Invalid Input",
				body: ["Please enter a valid age and username. (non empty)"],
			});
			setIsAgeSafe(false);
			everythingIsFine = false;
		}
		if (usernameRef.current.value.trim().length === 0) {
			setError({
				title: "Invalid Input",
				body: ["Please enter a valid age and username. (non empty)"],
			});
			setIsUsernameSafe(false);
			everythingIsFine = false;
		}

		return everythingIsFine;
	};

	const addUserClickedHandler = () => {
		if (!isItAllSafe()) {
			return;
		}

		props.addUser({
			username: usernameRef.current.value,
			age: ageRef.current.value,
		});

		removeError();

		usernameRef.current.value = "";
		ageRef.current.value = "";
	};

	const removeError = () => {
		setError(null);
	};

	return (
		<>
			{error && (
				<Error
					title={error.title}
					body={error.body}
					removeError={removeError}
				/>
			)}
			<div className="my-3 p-3 border border-info rounded">
				<div className={`mb-2 ${!isUsernameSafe && styles.invalid}`}>
					<label className="form-label" htmlFor="username">
						Username
					</label>
					<input
						className="form-control"
						type="text"
						name="username"
						id="username"
						ref={usernameRef}
						onChange={usernameChangedHandler}
					/>
				</div>
				<div className={`mb-2 ${!isAgeSafe && styles.invalid}`}>
					<label className="form-label" htmlFor="age">
						Age
					</label>
					<input
						className="form-control"
						type="string"
						name="age"
						id="age"
						ref={ageRef}
						onChange={ageChangedHandler}
					/>
				</div>
				<div className="d-grid gap-2">
					<button className="btn btn-info" onClick={addUserClickedHandler}>
						Add User
					</button>
				</div>
			</div>
		</>
	);
};

export default AddUser;
