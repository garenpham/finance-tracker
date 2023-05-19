import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { plus } from '../../utils/Icons';
import Button from '../Button/Button';
import { InputStateType } from './IncomeForm';

type Props = {};

function ExpensesForm({}: Props) {
	const { addExpense } = useGlobalContext();

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
		};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (addExpense) {
			addExpense(inputState);
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
		<ExpensesFormStyled onSubmit={handleSubmit}>
			<div className="input-control">
				<input
					type="text"
					value={title}
					name={'title'}
					placeholder="Expense Title"
					onChange={handleInput('title')}
				/>
			</div>
			<div className="input-control">
				<input
					type="number"
					value={amount}
					name={'amount'}
					placeholder="Expense Amount"
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
					<option value="education">Education</option>
					<option value="groceries">Groceries</option>
					<option value="health">Health</option>
					<option value="subscriptions">Subscriptions</option>
					<option value="takeaways">Takeaways</option>
					<option value="clothing">Clothing</option>
					<option value="travelling">Travelling</option>
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
					name={'Add Expense'}
					icon={plus}
					btnPad={'.8rem 1.6rem'}
					btnRad={'30px'}
					bg={'var(--color-accent)'}
					color={'#fff'}
				/>
			</div>
		</ExpensesFormStyled>
	);
}

const ExpensesFormStyled = styled.form`
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

export default ExpensesForm;
