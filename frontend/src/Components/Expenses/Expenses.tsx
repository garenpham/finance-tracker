import React, { useEffect } from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import IncomeForm from '../Forms/IncomeForm';
import IncomeItem from '../IncomeItem/IncomeItem';
import { IncomeExpensesType } from '../Income/Income';

type Props = {};

function Expenses({}: Props) {
	const {
		addIncome,
		incomes,
		getIncomes,
		deleteIncome,
		totalIncomes: totalIncome,
	} = useGlobalContext();

	useEffect(() => {
		if (getIncomes) {
			getIncomes();
		}
	}, []);

	return (
		<ExpensesStyled>
			<InnerLayout>
				<h1>Expenses</h1>
				<h2 className="total-income">
					Total Expense: <span>${totalIncome()}</span>
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
									<IncomeItem
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
		</ExpensesStyled>
	);
}

const ExpensesStyled = styled.div`
	display: flex;
	overflow: auto;
	.total-income {
		display: flex;
		justify-content: center;
		align-items: center;
		background: #fcf6f9;
		border: var(--primary-border);
		box-shadow: var(--primary-box-shadow);
		border-radius: 20px;
		padding: 1rem;
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

export default Expenses;
