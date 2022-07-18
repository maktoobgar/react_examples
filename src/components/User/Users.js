import User from "./User";

const Users = (props) => {
	const users = props.users.map((element) => {
		return (
			<User
				header={element.username}
				body={element.age}
				key={element.id}
				id={element.id}
			/>
		);
	});

	let title = <p className="text-center fs-5 m-0">Items</p>;
	if (users.length === 0) {
		title = <p className="text-center fs-5 m-0">No items found</p>;
	}

	return (
		<ul className="row g-0 my-3 p-3 border border-info rounded">
			{title}
			{users}
		</ul>
	);
};

export default Users;
