import { useState } from "react";
import Expenses from "../Expense/Expenses";
import NewExpenseForm from "../NewExpenseForm/NewExpenseForm";

let expenses = [];

const Container = () => {
	const [list, setList] = useState([]);
	const [year, setYear] = useState("2022");

	const addNewExpense = (data) => {
		data.id = Math.random();

		expenses = [data, ...expenses];
		setList(
			expenses.filter((element) => {
				return element.date.getFullYear().toString() === year;
			})
		);
	};

	const updateYear = (data) => {
		setYear(data);
		setList(
			expenses.filter((element) => {
				return element.date.getFullYear().toString() === data;
			})
		);
	};

	return (
		<div className="container vh-100">
			<div className="row h-100 align-content-center">
				<NewExpenseForm year={year} addNewExpense={addNewExpense} />
				<Expenses
					data={list}
					year={year}
					updateYearOnUpperContainer={updateYear}
				/>
			</div>
		</div>
	);
};

export default Container;
