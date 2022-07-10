import {FrameTabs} from "../FrameTabs/FrameTabs";

export function VisualisationAnalysisFrame()
{
	return(
		<FrameTabs
			tabs={[
				{
					button: {title: 'Визуализация'},
					content : "1",

				},
				{
					button: {title: 'Анализ'},
					content: "2",
				}
			]}
		/>
	);
}