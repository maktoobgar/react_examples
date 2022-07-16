import ExpenseItem from "./components/ExpenseItem";
import "./App.css";

function App() {
	const data = [
		{
			title: "Car Insurance",
			date: new Date(),
			cost: 452.32,
		},
		{
			title: "Car Insurance",
			date: new Date(),
			cost: 452.32,
		},
		{
			title: "Car Insurance",
			date: new Date(),
			cost: 452.32,
		},
		{
			title: "Car Insurance",
			date: new Date(),
			cost: 452.32,
		},
	];
	return (
		<div>
			<ExpenseItem
				title={data[0].title}
				date={data[0].date}
				cost={data[0].cost}
			></ExpenseItem>
			<ExpenseItem
				title={data[1].title}
				date={data[1].date}
				cost={data[1].cost}
			></ExpenseItem>
			<ExpenseItem
				title={data[2].title}
				date={data[2].date}
				cost={data[2].cost}
			></ExpenseItem>
			<ExpenseItem
				title={data[3].title}
				date={data[3].date}
				cost={data[3].cost}
			></ExpenseItem>
		</div>
	);
}

export default App;
