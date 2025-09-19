import { useState } from 'react';
import data from './data.json';
import styles from './App.module.css';

export const App = () => {
	const [steps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);
	const isTheFirstStep = activeIndex === 0;
	const isTheLastStep = activeIndex === steps.length - 1;

	const onStepClick = (index) => setActiveIndex(index);
	const onPreviousClick = () => {
		if (!isTheFirstStep) {
			setActiveIndex((prev) => prev - 1);
		}
	};
	const onNextClick = () => {
		if (!isTheLastStep) {
			setActiveIndex((prev) => prev + 1);
		}
	};
	const onStartClick = () => {
		setActiveIndex(0);
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>{steps[activeIndex]?.content}</div>
					<ul className={styles['steps-list']}>
						{steps.map(({id, title}, index) => (
							<li
								className={`${styles['steps-item']} ${index === activeIndex ? styles.active : ''} ${index <= activeIndex ? styles.done : ''}`}
								key={id}
							>
								<button
									className={styles['steps-item-button']}
									onClick={() => onStepClick(index)}
								>
									{index + 1}
								</button>
							 {title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={onPreviousClick}
							disabled={isTheFirstStep}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={isTheLastStep ? onStartClick : onNextClick}
						>
							{!isTheLastStep ? 'Вперёд' : 'Начать сначала'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
