import React from 'react';
import { styled } from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { IncomeExpensesType } from '../Income/Income';

type Props = {};

function History({}: Props) {
	const { transactionHistory } = useGlobalContext();

	const [...history] = transactionHistory();

	return (
		<HistoryStyled>
			<h2>Recent History</h2>
			{history.map(({ _id, title, amount, type }: IncomeExpensesType) => {
				return (
					<div
						key={_id}
						className="history-item">
						<p
							style={{
								color: type === 'income' ? 'var(--color-green)' : 'red',
							}}>
							{title}
						</p>

						<p
							style={{
								color: type === 'income' ? 'var(--color-green)' : 'red',
							}}>
							{type === 'income' ? '+' : '-'}
							{amount}
						</p>
					</div>
				);
			})}
		</HistoryStyled>
	);
}

const HistoryStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	.history-item {
		background: #fcf6f9;
		border: var(--primary-border);
		box-shadow: var(--primary-box-shadow);
		border-radius: 20px;
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

export default History;
