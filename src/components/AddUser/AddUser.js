import { useState } from "react";
import Error from "../UI/Error";
import styles from "./AddUsers.module.css";

const AddUser = (props) => {
	const [username, setUsername] = useState("");
	const [age, setAge] = useState("");
	const [isUsernameSafe, setIsUsernameSafe] = useState(true);
	const [isAgeSafe, setIsAgeSafe] = useState(true);
	const [error, setError] = useState(null);

	const usernameChanedHandler = (event) => {
		if (event.target.value.trim().length !== 0) {
			setIsUsernameSafe(true);
		}
		setUsername(event.target.value.trim());
	};

	const ageChanedHandler = (event) => {
		if (!isNaN(event.target.value.trim())) {
			setIsAgeSafe(true);
		}
		setAge(event.target.value.trim());
	};

	const isItAllSafe = () => {
		let everythingIsFine = true;

		if (isNaN(age) || age.length === 0) {
			setError({
				title: "Invalid Input",
				body: ["Please enter a valid age and username. (non empty)"],
			});
			setIsAgeSafe(false);
			everythingIsFine = false;
		}
		if (username.trim().length === 0) {
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

		props.addUser({ username: username, age: age });
	};

	const removeError = () => {
		setError(null);
	};

	return (
		<div className="p-0">
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
						onChange={usernameChanedHandler}
						value={username}
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
						onChange={ageChanedHandler}
						value={age}
					/>
				</div>
				<div className="d-grid gap-2">
					<button className="btn btn-info" onClick={addUserClickedHandler}>
						Add User
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddUser;
