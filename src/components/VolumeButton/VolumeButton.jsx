import './VolumeButton.css';

const VolumeButton = () => {
  return (
    <div className='container-b'> 
      <button className='volume-button' icon="../../assets\7754951_media player_button_sound_speaker_volume_icon.png">{this.props.icon}</button>
    </div>
  )
}

export default VolumeButton