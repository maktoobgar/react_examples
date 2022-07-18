import { useState } from "react";
import AddUser from "../AddUser/AddUser";
import Users from "../User/Users";

const UserContainer = (props) => {
	const [users, setUsers] = useState([]);

	const addUser = (user) => {
		user.id = Math.floor(Math.random() * 100000).toString();
		setUsers([...users, user]);
	};

	return (
		<div className="container min-vh-100 px-4">
			<div className="row align-content-center min-vh-100">
				<AddUser addUser={addUser} />
				<Users users={users} />
			</div>
		</div>
	);
};

export default UserContainer;
