import { styled } from 'styled-components';
import avatar from '../../img/avatar.png';
import { menuItems } from '../../utils/menuItems';
import { signout } from '../../utils/Icons';

type Props = {
	active: number;
	setActive: (active: number) => void;
};

function Navigation({ active, setActive }: Props) {
	return (
		<NavStyled>
			<div className="user-con">
				<img
					src={avatar}
					alt="avatar"
				/>
				<div className="text">
					<h2>Tan Pham</h2>
					<p>Your Money</p>
				</div>
			</div>

			<ul className="menu-items">
				{menuItems.map((item) => {
					return (
						<li
							key={item.id}
							onClick={() => setActive(item.id)}
							className={active === item.id ? 'active' : ''}>
							{item.icon}
							<span>{item.title}</span>{' '}
						</li>
					);
				})}
			</ul>

			<div className="bottom-nav">
				<li>{signout} Sign Out</li>
			</div>
		</NavStyled>
	);
}

const NavStyled = styled.nav`
	padding: 2rem 1.5rem;
	width: 374px;
	height: 100%;
	background: rgba(252, 246, 249, 0.78);
	border: 3px solid #fff;
	backdrop-filter: blur(4.5px);
	border-radius: 32px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2rem;
	.user-con {
		height: 100px;
		display: flex;
		align-items: center;
		gap: 1rem;
		img {
			width: 80px;
			height: 80px;
			border-radius: 50%;
			object-fit: cover;
			background: #fcf6f9;
			border: 2px solid #fff;
			padding: 0.2rem;
			box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
		}
		h2 {
			color: rgba(34, 34, 96, 1);
		}
		p {
			color: rgba(34, 34, 96, 0.6);
		}
	}
	.menu-items {
		flex: 1;
		display: flex;
		flex-direction: column;
		li {
			display: grid;
			grid-template-columns: 40px auto;
			align-items: center;
			margin: 0.6rem 0;
			font-weight: 500;
			cursor: pointer;
			transition: all 0.4 ease-in-out;
			color: var(--primary-color2);
			padding-left: 1rem;
			position: relative;
			i {
				color: var(--primary-color2);
				font-size: 1.4rem;
				transition: all 0.4 ease-in-out;
			}
		}
	}

	.active {
		color: var(--primary-color) !important;
		i {
			color: var(--primary-color) !important;
		}
		&::before {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			width: 4px;
			height: 100%;
			background: var(--primary-color);
			border-radius: 0 10px 10px 0;
		}
	}
`;

export default Navigation;