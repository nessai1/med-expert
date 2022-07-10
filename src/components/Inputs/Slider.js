import ReactSlider from "react-slider";
import './Slider.css';
//TODO исправить баг, что thumb слайдера виден, если полностью "задвинуть" шторку фрейма
export function Slider(){
	return (
		<ReactSlider
			className="Slider"
			trackClassName="SliderTrack"
			thumbClassName="SliderThumb"
		/>
	);
}