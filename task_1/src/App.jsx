import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	const handleInputClick = () => {
		const input = prompt('Введите значение');

		if (input.trim().length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа');
		} else {
			setValue(input);
			setError('');
		}
	};

	const handleAddClick = () => {
		const newItem = { id: Date.now(), value };
		const newList = [...list, newItem];
		setList(newList);
		setValue('');
		console.log('listItem', list);
	};

	return (
		<div className={styles.app}>
			<h1 className={styles.pageHeading}>Ввод значения</h1>
			<p className={styles.noMarginText}>
				Текущее значение <code>value</code>: "
				<output className={styles.currentValue}>{value}</output>"
			</p>
			{error && <div className={styles.error}>{error}</div>}
			<div className={styles.buttonsContainer}>
				<button className={styles.button} onClick={handleInputClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					onClick={handleAddClick}
					disabled={value.length < 3}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles.listContainer}>
				{list.length < 1 ? (
					<p className={styles.noMarginText}>Нет добавленных элементов</p>
				) : (
					<ul className={styles.list}>
						<h2 className={styles.listHeading}>Список:</h2>
						{list.map(({ id, value }) => (
							<li className={styles.listItem} key={id}>
								{value}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};
