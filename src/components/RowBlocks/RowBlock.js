import styles from './RowBlock.module.css';
export function RowBlock({title, content})
{

	return(
		<div className={styles.rowBlock}>
			<div className={styles.rowBlockTitle}>
				{title}
			</div>
			<div className={styles.rowBlockContent}>
				{content}
			</div>
		</div>
	);
}