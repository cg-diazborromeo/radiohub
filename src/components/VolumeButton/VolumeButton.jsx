// import PropTypes from 'prop-types';
import { useState } from 'react';
import './VolumeButton.css';

const VolumeButton = () => {
  const [buttonText, setButtonText] = useState(<>&#128264;</>)

  const handleButtonText = () => {
    setButtonText(buttonText === <>&#128264;</> ? <>&#128263;</> : <>&#128264;</>)
  }

  return (
    <div className='container-b'> 
      <button className='volume-button' onClick={handleButtonText}>{buttonText}</button>
    </div>
  )
}

VolumeButton.propTypes = {
  // setDisplayTo: PropTypes.func.isRequired,
};

export default VolumeButton