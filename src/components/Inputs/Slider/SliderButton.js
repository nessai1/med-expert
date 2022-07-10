import styles from './SliderButton.module.css'

export function SliderButton({id, title, currentValue,onClick}){

	return(
		<button className={styles.SliderButton} onClick={onClick}>
			<span className={styles.SliderButtonText}>
				{title}
			</span>
		</button>
	);
}