import styles from './SliderButton.module.css'

export function SliderButton({id, title, currentValue,onClick}){

	return(
		<button className={styles.SliderButton} onClick={currentValue++}>
			<span>
				{title}
			</span>
		</button>
	);
}