import ReactSlider from "react-slider";
import './Slider.css';
import {SliderButton} from "./SliderButton";
import {useStatem, useEffect, useState} from "react";

export function Slider({id}){
	const [currentValue, setCurrentValue] = useState(0);

	return (
		<div className="SliderWrap">
			<SliderButton
				id = {id}
				title={'-'}
				currentValue={currentValue}
				onClick={() => setCurrentValue(currentValue - 1)}
			/>
			<ReactSlider
				className="Slider"
				trackClassName="SliderTrack"
				thumbClassName="SliderThumb"
				value={currentValue}
				onChange={(value) => setCurrentValue(value)}
			/>
			<SliderButton
				id = {id}
				title={'+'}
				currentValue={currentValue}
				onClick={() => setCurrentValue(currentValue + 1)}
			/>
		</div>

	);
}