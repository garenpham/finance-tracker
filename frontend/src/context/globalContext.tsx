import React, { useContext, useState } from 'react';
import axios from 'axios';
import { InputStateType } from '../Components/Form/Form';

interface Props {
	children: React.ReactNode;
}

interface GlobalContextType {
	addIncome?: (income: InputStateType) => Promise<void>;
	getIncomes?: () => Promise<void>;
	incomes?: never[];
}

const GlobalContext = React.createContext<GlobalContextType>({});

export const GlobalProvider = ({ children }: Props) => {
	const [incomes, setIncomes] = useState([]);
	const [expenses, setExpenses] = useState([]);
	const [error, setError] = useState(null);

	const addIncome = async (income: InputStateType) => {
		const response = await axios
			.post(`${process.env.REACT_APP_BASE_URL}/add-income`, income)
			.then((res) => console.log(res.data))
			.catch((err) => setError(err.response.data.message));
	};

	const getIncomes = async () => {
		const response = await axios
			.get(`${process.env.REACT_APP_BASE_URL}/get-incomes`)
			.catch((err) => setError(err.response.data.message));
		if (response) {
			setIncomes(response.data);
		}
	};

	// if (incomes) {
	// 	console.log(incomes);
	// }

	return (
		<GlobalContext.Provider value={{ addIncome, getIncomes, incomes }}>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(GlobalContext);
};
