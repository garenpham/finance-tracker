import React, { useEffect } from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import IncomeForm from '../Forms/IncomeForm';
import Items from '../ItemsList/Items';
import { boxStyled } from '../../styles/GlobalStyle';

type Props = {};

export interface IncomeExpensesType {
	_id: string;
	title: string;
	amount: number;
	date: string;
	category: string;
	description: string;
	type: string;
	createdAt: string;
}

function Income({}: Props) {
	const { addIncome, incomes, getIncomes, deleteIncome, totalIncomes } =
		useGlobalContext();

	console.log(incomes);

	useEffect(() => {
		getIncomes();
	}, []);

	return (
		<IncomeStyled>
			<InnerLayout>
				<h1>Incomes</h1>
				<h2 className="total-income">
					Total Income: <span>${totalIncomes()}</span>
				</h2>
				<div className="income-content">
					<div className="form-container">
						<IncomeForm />
					</div>
					<div className="incomes">
						{incomes &&
							incomes.map((income: IncomeExpensesType) => {
								const {
									_id,
									title,
									type,
									amount,
									date,
									category,
									description,
								} = income;
								return (
									<Items
										key={_id}
										id={_id}
										title={title}
										type={type}
										amount={amount}
										date={date}
										category={category}
										description={description}
										indicatorColor="var(--color-green)"
										deleteItem={deleteIncome}
									/>
								);
							})}
					</div>
				</div>
			</InnerLayout>
		</IncomeStyled>
	);
}

const IncomeStyled = styled.div`
	display: flex;
	overflow: auto;
	.total-income {
		display: flex;
		justify-content: center;
		align-items: center;
		${boxStyled}
		margin: 1rem 0;
		font-size: 2rem;
		gap: 0.5rem;
		span {
			font-size: 2.5rem;
			font-weight: 800;
			color: var(--color-green);
		}
	}
	.income-content {
		display: flex;
		gap: 2rem;
		.incomes {
			flex: 1;
		}
	}
`;

export default Income;
