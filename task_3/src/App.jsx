import { useState } from 'react';
import styles from './App.module.css';
import { NUMS } from './data';
// const ACTIONS = ['=', 'C', '+', '-'];

export const App = () => {
	const [operator1, setOperator1] = useState('');
	const [operator2, setOperator2] = useState('');
	const [operand, setOperand] = useState('');
	const [isSecondOperator, setIsSecondOperator] = useState(false);
	const [isResult, setIsResult] = useState(false);

	const onNumberClick = ({ target }) => {
		const value = target.textContent;
		setIsResult(false);

		if (!isSecondOperator) {
			setOperator1((prev) => prev + value);
		} else {
			setOperator2((prev) => prev + value);
		}
	};

	const onOperatorClick = ({ target }) => {
		setIsResult(false);
		if (operator1.length === 0) return;
		if (operand.length === 0) {
			setOperand(target.textContent);
		}
		setIsSecondOperator(true);
	};

	const onEqualsClick = () => {
		if (!operand || !operator2) return;
		let result;
		if (operand === '+') {
			result = Number(operator1) + Number(operator2);
		} else if (operand === '-') {
			result = Number(operator1) - Number(operator2);
		}
		setOperator1(String(result));
		setOperand('');
		setOperator2('');
		setIsResult(true);
	};

	const onClearClick = () => {
		setOperator1('');
		setOperator2('');
		setOperand('');
		setIsSecondOperator(false);
	};

	return (
		<div className={styles.container}>
			<h1>Калькулятор</h1>
			<div className={styles.calculator}>
				<input
					type="text"
					className={`${styles.input} ${isResult ? styles.result : ''}`}
					value={operator1 + operand + operator2}
					readOnly
				/>
				<div className={styles['buttons-container']}>
					<div className={styles['number-buttons']}>
						{NUMS.map((num) => (
							<button
								className={styles.button}
								key={crypto.randomUUID()}
								onClick={onNumberClick}
							>
								{num}
							</button>
						))}
					</div>
					<div className={styles['action-buttons']}>
						<button className={styles.button} id="clear" onClick={onClearClick}>
							C
						</button>
						<button className={styles.button} id="plus" onClick={onOperatorClick}>
							+
						</button>

						<button className={styles.button} id="mines" onClick={onOperatorClick}>
							-
						</button>
						<button className={styles.button} onClick={onEqualsClick}>
							=
						</button>
						<span className={styles.logo}>TURBO TECH</span>
					</div>
				</div>
			</div>
		</div>
	);
};
