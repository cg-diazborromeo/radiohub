import Slider from 'rc-slider';
import VolumeButton from '../VolumeButton/VolumeButton';
import '../../../node_modules/rc-slider/assets/index.css';



const VolumeSettings = () => {
  return (
    <>
    <VolumeButton />
    <Slider
        defaultValue={30}
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
    />
  </>
  )
}

export default VolumeSettings