import './VolumeButton.css';

// eslint-disable-next-line react/prop-types
const VolumeButton = ({handleVolumeSettings, volumeSymbol}) => {
  

  return (
    <div className='container-b'> 
      <button className='volume-button' onClick={handleVolumeSettings}>{volumeSymbol}</button>
    </div>
  )
}

export default VolumeButton