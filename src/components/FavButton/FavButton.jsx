import { useState } from 'react';
import './FavButton.css';

const FavButton = () => {
  const [liked, setLiked] = useState(false);
  const favSymbol = liked ? <>&#9829;</> : <>&#9825;</>;

  const handleLikedState = () => {
    setLiked(!liked);
  }

  return (
    <div className="fav-button-container">
        <button className="fav-button" onClick={handleLikedState}>{favSymbol}</button>
    </div>
  )
}

export default FavButton