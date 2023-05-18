import React, { useEffect } from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

type Props = {};

interface IncomeType {
	_id: string;
	title: string;
	amount: number;
	date: string;
	category: string;
	description: string;
}

function Income({}: Props) {
	const { addIncome, incomes, getIncomes } = useGlobalContext();

	useEffect(() => {
		if (getIncomes) {
			getIncomes();
		}
	}, []);

	return (
		<IncomeStyled>
			<InnerLayout>
				<h1>Incomes</h1>
				<div className="income-content">
					<div className="form-container">
						<Form />
					</div>
					<div className="incomes">
						{incomes &&
							incomes.map((income: IncomeType) => {
								const { _id, title, amount, date, category, description } =
									income;
								return (
									<IncomeItem
										key={_id}
										id={_id}
										title={title}
										amount={amount}
										date={date}
										category={category}
										description={description}
									/>
								);
							})}
					</div>
				</div>
			</InnerLayout>
		</IncomeStyled>
	);
}

const IncomeStyled = styled.div``;

export default Income;
