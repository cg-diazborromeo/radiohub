import { useState } from 'react';
import Slider from 'rc-slider';
import VolumeButton from '../VolumeButton/VolumeButton';
import '../../../node_modules/rc-slider/assets/index.css';
import './VolumeSettings.css'



const VolumeSettings = () => {
  const [sliderValue, setSliderValue] = useState(30)
  const [volume, setVolume] = useState(true);
  const volumeSymbol = volume ? <>&#128264;</> : <>&#128263;</>;

  const handleVolumeSettings = () => {
    setVolume(!volume)
    volume && setSliderValue(0)
    !volume && setSliderValue(30)
  }
  

  // const setDisplayTo = () => {
  //   setDisplay(display === 'none' ? '' : 'none');
  // };

  return (
    <>
    <VolumeButton handleVolumeSettings={handleVolumeSettings} volumeSymbol={volumeSymbol}/>
    <Slider
        // style={{ display: display }}
        className='slider'
        value={sliderValue}
        trackStyle={{ backgroundColor: 'black', height: 5 }}
        handleStyle={{
          borderColor: '#F2655C',
          height: 11,
          width: 11,
          marginLeft: 0,
          marginTop: -3,
          backgroundColor: 'white',
        }}
        railStyle={{ backgroundColor: 'gray', height: 5 }}
        onChange={setSliderValue}
    />
    <div className='label-container'>
      <label>{sliderValue}</label>
    </div>
  </>
  )
}

export default VolumeSettings