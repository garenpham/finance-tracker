import React, { useContext, useState } from 'react';
import axios from 'axios';
import { InputStateType } from '../Components/Forms/IncomeForm';
import { IncomeExpensesType } from '../Components/Income/Income';

interface Props {
	children: React.ReactNode;
}

interface GlobalContextType {
	addIncome: (income: InputStateType) => Promise<void>;
	getIncomes: () => Promise<void>;
	deleteIncome: (id: string) => Promise<void>;
	incomes: never[];
	totalIncomes: () => number;
	addExpense: (expense: InputStateType) => Promise<void>;
	getExpenses: () => Promise<void>;
	deleteExpense: (id: string) => Promise<void>;
	expenses: never[];
	totalExpenses: () => number;
}

const GlobalContext = React.createContext<GlobalContextType>({
	addIncome: async (income: InputStateType) => {},
	getIncomes: async () => {},
	deleteIncome: async (id: string) => {},
	incomes: [],
	totalIncomes: () => 0,
	addExpense: async (expense: InputStateType) => {},
	getExpenses: async () => {},
	deleteExpense: async (id: string) => {},
	expenses: [],
	totalExpenses: () => 0,
});

export const GlobalProvider = ({ children }: Props) => {
	const [incomes, setIncomes] = useState([]);
	const [expenses, setExpenses] = useState([]);
	const [error, setError] = useState(null);

	/**
	 * Incomes
	 */

	const getIncomes = async () => {
		const response = await axios
			.get(`${process.env.REACT_APP_BASE_URL}/get-incomes`)
			.catch((err) => setError(err.response.data.message));
		if (response) {
			setIncomes(response.data);
		}
	};

	const addIncome = async (income: InputStateType) => {
		const response = await axios
			.post(`${process.env.REACT_APP_BASE_URL}/add-income`, income)
			.then((res) => console.log(res.data))
			.catch((err) => setError(err.response.data.message));
		getIncomes();
	};

	const deleteIncome = async (id: string) => {
		const response = await axios.delete(
			`${process.env.REACT_APP_BASE_URL}/delete-income/${id}`,
		);
		getIncomes();
	};

	const totalIncomes = () => {
		let totalIncome = 0;
		incomes.forEach((income: IncomeExpensesType) => {
			totalIncome = totalIncome + income.amount;
		});

		return totalIncome;
	};

	/**
	 * Expenses
	 */

	const getExpenses = async () => {
		const response = await axios
			.get(`${process.env.REACT_APP_BASE_URL}/get-expenses`)
			.catch((err) => setError(err.response.data.message));
		if (response) {
			setExpenses(response.data);
		}
	};

	const addExpense = async (expense: InputStateType) => {
		const response = await axios
			.post(`${process.env.REACT_APP_BASE_URL}/add-expense`, expense)
			.then((res) => console.log(res.data))
			.catch((err) => setError(err.response.data.message));
		getExpenses();
	};

	const deleteExpense = async (id: string) => {
		const response = await axios.delete(
			`${process.env.REACT_APP_BASE_URL}/delete-expense/${id}`,
		);
		getExpenses();
	};

	const totalExpenses = () => {
		let totalExpenses = 0;
		expenses.forEach((expense: IncomeExpensesType) => {
			totalExpenses = totalExpenses + expense.amount;
		});

		return totalExpenses;
	};

	return (
		<GlobalContext.Provider
			value={{
				addIncome,
				getIncomes,
				incomes,
				deleteIncome,
				totalIncomes,
				addExpense,
				getExpenses,
				expenses,
				deleteExpense,
				totalExpenses,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(GlobalContext);
};
