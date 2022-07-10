import styles from './CheckBox.module.css';

export function CheckBox(){
	return (
		<input
			type="checkbox"
			className={styles.CheckBox}
		/>
	);
}