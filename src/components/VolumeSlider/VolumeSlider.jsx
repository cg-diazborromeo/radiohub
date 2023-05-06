import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../../../node_modules/rc-slider/assets/index.css';


const VolumeSlider = () => {
  return (
    <>
    <Slider
        defaultValue={30}
        trackStyle={{ backgroundColor: '#F2655C', height: 5 }}
        handleStyle={{
          borderColor: '#F2655C',
          height: 11,
          width: 11,
          marginLeft: 0,
          marginTop: -3,
          backgroundColor: 'white',
        }}
        railStyle={{ backgroundColor: 'gray', height: 5 }}
    />
  </>
  )
}

export default VolumeSlider