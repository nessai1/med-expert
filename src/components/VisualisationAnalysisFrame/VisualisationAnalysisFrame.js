import {FrameTabs} from "../FrameTabs/FrameTabs";
import {RowBlocks} from "../RowBlocks/RowBlocks";
import styles from './VisualisationAnalysisFrame.module.css'
import ReactSlider from "react-slider";


export function VisualisationAnalysisFrame()
{
	return(
		<div className={styles.VisualisationAnalysisFrame}>
			<FrameTabs
				tabs={[
					{
						button: {title: 'Визуализация'},
						content :
							<RowBlocks
								blocks={[
									{
										title: 'Стандартный',
										content: [
											<select id="sel1" className={styles.ShortSelector}>
												<option>Realistic</option>
												<option>Cardio</option>
											</select>,
											<button className={styles.Button}>
												Редактировать
											</button>
										],
									},
									{
										title: 'Освещение',
										content: <ReactSlider/>,
									},
									{
										title: 'Уровень',
										content:  <ReactSlider/>,
									},
									{
										title: 'Порог',
										content:  <ReactSlider/>,
									},
									{
										title: 'Прозрачность',
										content:  <ReactSlider/>,
									},
									{
										title: 'X границы',
										content: <input className={styles.LongInput}/>,
									},
									{
										title: 'Y границы',
										content: <input className={styles.LongInput}/>,
									},
									{
										title: 'Z границы',
										content: <input className={styles.LongInput}/>,
									},
									{
										title: 'Тип выреза',
										content:
											<select id="sel2" className={styles.LongSelector}>
												<option>Без выреза</option>
												<option>Углом</option>
												<option>Передней плоскотью</option>
											</select>,
									},

								]}
							/>,
					},
					{
						button: {title: 'Анализ'},
						content: "2",
					}
				]}
			/>
		</div>

	);
}