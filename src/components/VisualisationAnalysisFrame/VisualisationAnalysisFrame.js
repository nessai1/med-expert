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
										content: 'Кукареку',
									},
									{
										title: 'Освещение',
										content: <ReactSlider
											className="horizontal-slider"
											thumbClassName="example-thumb"
											trackClassName="example-track"
											//custom track
										/>
									},
									{
										title: 'Уровень',
										content: 'Кукареку',
									},
									{
										title: 'Порог',
										content: 'Кукареку2',
									},
									{
										title: 'Прозрачность',
										content: 'Кукареку2',
									},
									{
										title: 'X границы',
										content: 'Кукареку',
									},
									{
										title: 'Y границы',
										content: 'Кукареку2',
									},
									{
										title: 'Z границы',
										content: <input/>,
									},
									{
										title: 'Тип выреза',
										content: 'Кукареку2',
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