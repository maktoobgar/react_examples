import Container from "./components/UI/Container";
import GoalContainer from "./components/UI/GoalContainer";
import UserContainer from "./components/UI/UserContainer";
import AuthenticationContainer from "./components/UI/AuthenticationContainer";
import "./App.css";

const App = () => {
	// eslint-disable-next-line
	return <AuthenticationContainer />;
	// eslint-disable-next-line
	return <UserContainer />;
	// eslint-disable-next-line
	return <Container />;
	return <GoalContainer />;
};

export default App;
