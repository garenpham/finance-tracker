import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { plus } from '../../utils/Icons';
import Button from '../Button/Button';

type Props = {};

export interface InputStateType {
	title: string;
	amount: number | string;
	date: Date | null;
	category: string;
	description: string;
}

function IncomeForm({}: Props) {
	const { addIncome, error, setError } = useGlobalContext();

	const [inputState, setInputState] = useState<InputStateType>({
		title: '',
		amount: '',
		date: null,
		category: '',
		description: '',
	});

	const { title, amount, date, category, description } = inputState;

	const handleInput =
		(name: string | number) =>
		(
			e:
				| React.ChangeEvent<HTMLInputElement>
				| React.ChangeEvent<HTMLSelectElement>
				| React.ChangeEvent<HTMLTextAreaElement>,
		) => {
			if (name === 'amount' && e.target instanceof HTMLInputElement) {
				setInputState({ ...inputState, [name]: e.target.valueAsNumber });
			} else {
				setInputState({ ...inputState, [name]: e.target.value });
			}
			setError(null);
		};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (addIncome) {
			addIncome(inputState);
		}
		setInputState({
			title: '',
			amount: '',
			date: null,
			category: '',
			description: '',
		});
	};

	return (
		<IncomeFormStyled onSubmit={handleSubmit}>
			{error && <p className="error">{error}</p>}
			<div className="input-control">
				<input
					type="text"
					value={title}
					name={'title'}
					placeholder="Salary Title"
					onChange={handleInput('title')}
				/>
			</div>
			<div className="input-control">
				<input
					type="number"
					value={amount}
					name={'amount'}
					placeholder="Salary Amount"
					onChange={handleInput('amount')}
					autoComplete="off"
				/>
			</div>
			<div className="input-control">
				<DatePicker
					id="date"
					placeholderText="Enter a date"
					selected={date}
					dateFormat="dd/MM/yyyy"
					onChange={(date) => {
						date && setInputState({ ...inputState, date: date });
					}}
					autoComplete="off"
				/>
			</div>
			<div className="selects input-control">
				<select
					required
					value={category}
					name="category"
					id="category"
					onChange={handleInput('category')}>
					<option
						value=""
						disabled>
						Select Option
					</option>
					<option value="salary">Salary</option>
					<option value="freelancing">Freelancing</option>
					<option value="investments">Investiments</option>
					<option value="stocks">Stocks</option>
					<option value="bitcoin">Bitcoin</option>
					<option value="bank">Bank Transfer</option>
					<option value="youtube">Youtube</option>
					<option value="other">Other</option>
				</select>
			</div>

			<div className="input-control">
				<textarea
					name="description"
					id="description"
					value={description}
					placeholder="Add A Reference"
					cols={30}
					rows={4}
					onChange={handleInput('description')}></textarea>
			</div>
			<div className="submit-btn">
				<Button
					name={'Add Income'}
					icon={plus}
					btnPad={'.8rem 1.6rem'}
					btnRad={'30px'}
					bg={'var(--color-accent)'}
					color={'#fff'}
				/>
			</div>
		</IncomeFormStyled>
	);
}

const IncomeFormStyled = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	input,
	textarea,
	select {
		font-family: inherit;
		font-size: inherit;
		outline: none;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		border: var(--primary-border);
		background: transparent;
		resize: none;
		box-shadow: var(--primary-box-shadow);
		color: var(--primary-color4);
		&::placeholder {
			color: var(--primary-color3);
		}
	}
	.input-control {
		input {
			width: 100%;
		}
	}

	.selects {
		display: flex;
		justify-content: flex-end;
		select {
			color: var(--primary-color3);
			&:focus,
			&:active {
				color: var(--primary-color);
			}
		}
	}

	.submit-btn {
		button {
			box-shadow: var(--primary-box-shadow);
			&:hover {
				background: var(--color-green) !important;
			}
		}
	}
`;

export default IncomeForm;
