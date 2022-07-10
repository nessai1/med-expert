import ReactSlider from "react-slider";
import './Slider.css';
import {SliderButton} from "./SliderButton";
import { useState } from "react";

export function Slider({id}){
	// let [currentValue] = useState(0);
	// function setCurrentValue(value){
	// 	currentValue = value;
	// }
	return (
		<div className="SliderWrap">
			<SliderButton
				id = {id}
				title={'-'}
				// currentValue={currentValue}
				// onClick={() => setCurrentValue(++currentValue)}
			/>
			<ReactSlider
				className="Slider"
				trackClassName="SliderTrack"
				thumbClassName="SliderThumb"
				// value={currentValue}
				// onChange={(value) => setCurrentValue(value)}
			/>
			<SliderButton
				id = {id}
				title={'+'}
			/>
		</div>

	);
}