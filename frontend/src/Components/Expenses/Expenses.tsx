import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';

type Props = {};

function Expenses({}: Props) {
	return (
		<ExpensesStyled>
			<InnerLayout></InnerLayout>
		</ExpensesStyled>
	);
}

const ExpensesStyled = styled.div``;

export default Expenses;
