import { useState } from 'react'
import {
	CircularInput,
	CircularTrack,
	CircularProgress,
	CircularThumb,
} from 'react-circular-input'
import "./Slider.css"

const Slider = () => {
  const [value, setValue] = useState(0.25)

  return (
	<CircularInput value={value} onChange={setValue} radius={250}>
            <CircularTrack strokeWidth={10} stroke="rgb(205,218,226)" />
            <CircularProgress strokeWidth='10' stroke={`rgba(55, 30, 95, ${value * 100}`} />
            <CircularThumb fill="white" stroke="rgb(55, 30, 95)"/>
      </CircularInput>
	)
}

export default Slider