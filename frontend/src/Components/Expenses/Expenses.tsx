import { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import ExpensesForm from '../Forms/ExpensesForm';
import { IncomeExpensesType } from '../Income/Income';
import Items from '../ItemsList/Items';
import { boxStyled } from '../../styles/GlobalStyle';

type Props = {};

function Expenses({}: Props) {
	const { expenses, getExpenses, deleteExpense, totalExpenses } =
		useGlobalContext();

	useEffect(() => {
		getExpenses();
	}, []);

	return (
		<ExpensesStyled>
			<InnerLayout>
				<h1>Expenses</h1>
				<h2 className="total-expenses">
					Total Expense: <span>${totalExpenses()}</span>
				</h2>
				<div className="expense-content">
					<div className="form-container">
						<ExpensesForm />
					</div>
					<div className="expenses">
						{expenses &&
							expenses.map((expense: IncomeExpensesType) => {
								const {
									_id,
									title,
									type,
									amount,
									date,
									category,
									description,
								} = expense;
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
										deleteItem={deleteExpense}
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
	.total-expenses {
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
	.expense-content {
		display: flex;
		gap: 2rem;
		.expenses {
			flex: 1;
		}
	}
`;

export default Expenses;
