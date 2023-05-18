import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';

type Props = {};

function Dashboard({}: Props) {
	return (
		<DashboardStyled>
			<InnerLayout></InnerLayout>
		</DashboardStyled>
	);
}

const DashboardStyled = styled.div``;

export default Dashboard;
