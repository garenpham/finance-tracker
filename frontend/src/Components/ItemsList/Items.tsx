import styled from 'styled-components';
import {
	dollar,
	calendar,
	comment,
	trash,
	money,
	freelance,
	stocks,
	users,
	bitcoin,
	card,
	yt,
	piggy,
	book,
	medical,
	food,
	takeaway,
	tv,
	clothing,
	circle,
} from '../../utils/Icons';
import Button from '../Button/Button';
import { dateFormat } from '../../utils/dateFormat';
import { boxStyled } from '../../styles/GlobalStyle';

type Props = {
	id: string;
	title: string;
	amount: number;
	date: string;
	category: string;
	description: string;
	deleteItem: (id: string) => Promise<void>;
	indicatorColor: string;
	type: string;
};

function Items({
	id,
	title,
	amount,
	date,
	category,
	description,
	deleteItem,
	indicatorColor,
	type,
}: Props) {
	const incomeCatIcon = () => {
		switch (category) {
			case 'salary':
				return money;
			case 'freelancing':
				return freelance;
			case 'investments':
				return stocks;
			case 'stocks':
				return users;
			case 'bitcoin':
				return bitcoin;
			case 'bank':
				return card;
			case 'youtube':
				return yt;
			case 'other':
				return piggy;
			default:
				return '';
		}
	};

	const expenseCatIcon = () => {
		switch (category) {
			case 'education':
				return book;
			case 'groceries':
				return food;
			case 'health':
				return medical;
			case 'subscriptions':
				return tv;
			case 'takeaways':
				return takeaway;
			case 'clothing':
				return clothing;
			case 'travelling':
				return freelance;
			case 'other':
				return circle;
			default:
				return '';
		}
	};

	return (
		<ItemsStyled indicator={indicatorColor}>
			<div className="icon">
				{type === 'expense' ? expenseCatIcon() : incomeCatIcon()}
			</div>
			<div className="content">
				<h5>{title}</h5>
				<div className="inner-content">
					<div className="text">
						<p>
							{dollar} {amount}
						</p>
						<p>
							{calendar} {dateFormat(date)}
						</p>
						<p>
							{comment}
							{description}
						</p>
					</div>
					<div className="btn-con">
						<Button
							icon={trash}
							btnPad={'1rem'}
							btnRad={'50%'}
							bg={'var(--primary-color)'}
							color={'#fff'}
							iColor={'#fff'}
							hColor={'var(--color-green)'}
							onClick={() => deleteItem(id)}
						/>
					</div>
				</div>
			</div>
		</ItemsStyled>
	);
}

interface StyledProps {
	indicator?: string;
}

const ItemsStyled = styled.div<StyledProps>`
	${boxStyled}
	margin-bottom: 1rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	width: 100%;
	color: #222260;
	.icon {
		width: 80px;
		height: 80px;
		border-radius: 20px;
		background: #f5f5f5;
		display: flex;
		align-items: center;
		justify-content: center;
		border: var(--primary-border);
		i {
			font-size: 2.6rem;
		}
	}

	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		h5 {
			font-size: 1.3rem;
			padding-left: 2rem;
			position: relative;
			&::before {
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				width: 0.8rem;
				height: 0.8rem;
				border-radius: 50%;
				background: ${(props) => props.indicator};
			}
		}
		.inner-content {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.text {
				display: flex;
				align-items: center;
				gap: 1.5rem;
				p {
					display: flex;
					align-items: center;
					gap: 0.5rem;
					color: var(--primary-color);
					opacity: 0.8;
				}
			}
		}
	}
`;

export default Items;
