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
		<CircularInput value={value} onChange={setValue}>
        <CircularTrack strokeWidth={3} stroke="#eee" />
        <CircularProgress strokeWidth='10' stroke={`hsl(${value * 100}, 100%, 50%)`} />
        <CircularThumb  fill="white"
              stroke="rgb(61, 153, 255)"
              strokeWidth="4" />
      </CircularInput>
	)
}

export default Slider