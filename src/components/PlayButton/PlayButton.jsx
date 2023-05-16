import { useState } from 'react';
import './PlayButton.css'

const PlayButton = () => {
  const [state, setState] = useState(true);
  const classy = state ? 'play-button' : 'play-button paused';

  const handleState = () => {
    setState(!state)
  }

  return (
    <div className='surround-button'> 
      <button className={classy} onClick={handleState}></button>
    </div>
  )
}

export default PlayButton