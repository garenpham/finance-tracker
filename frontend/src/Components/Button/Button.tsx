import React from 'react';
import styled from 'styled-components';

type Props = {
	name?: string;
	icon: JSX.Element;
	onClick?: () => void;
	bg: string;
	btnPad: string;
	color: string;
	iColor?: string;
	hColor?: string;
	btnRad: string;
};

function Button({
	name,
	icon,
	onClick,
	bg,
	btnPad,
	color,
	iColor,
	hColor,
	btnRad,
}: Props) {
	return (
		<ButtonStyled
			style={{
				background: bg,
				padding: btnPad,
				borderRadius: btnRad,
				color: color,
			}}
			onClick={onClick}>
			{icon}
			{name}
		</ButtonStyled>
	);
}

const ButtonStyled = styled.button`
	outline: none;
	border: none;
	font-size: inherit;
	font-family: inherit;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;
	transition: all 0.4s ease-in-out;
`;

export default Button;
