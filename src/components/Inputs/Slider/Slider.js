import ReactSlider from "react-slider";
import './Slider.css';
import {SliderButton} from "./SliderButton";
import {useStatem, useEffect, useState} from "react";

export function Slider({id, changeCallback}){
	const [currentValue, setCurrentValue] = useState(100);

	if (!changeCallback)
	{
		changeCallback = (state) => {
			console.log(`slider ${id}: changed data to ${state}`);
		}
	}

	return (
		<div className="SliderWrap">
			<SliderButton
				id = {id}
				title={'-'}
				currentValue={currentValue}
				onClick={() => {
					changeCallback(currentValue - 1);
					setCurrentValue(currentValue - 1);
				}}
			/>
			<ReactSlider
				className="Slider"
				trackClassName="SliderTrack"
				thumbClassName="SliderThumb"
				value={currentValue}
				onChange={(value) => {
					changeCallback(value);
					setCurrentValue(value);
				}}
			/>
			<SliderButton
				id = {id}
				title={'+'}
				currentValue={currentValue}
				onClick={() => {
					changeCallback(currentValue + 1);
					setCurrentValue(currentValue + 1);
				}}
			/>
		</div>

	);
}