import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Vinil from "../Vinil/Vinil";
import PlayButton from "../PlayButton/PlayButton";
import Slider from "../Slider/Slider";
import "./Home.css"
import VolumeSettings from "../VolumeSettings/VolumeSettings";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="parent-container">
        <div className="slider-container" style={{ zIndex: 1, pointerEvents: 'auto' }}>
          <Slider />
        </div>
        <div className="radio-container">
          <div className="vinil-container">
            <Vinil />
          </div>
          <div className="button-container" style={{ zIndex: 2, pointerEvents: 'auto' }}>
            <PlayButton />
          </div>
        </div>
      </div>
      <div className="volume-container">
        <VolumeSettings />
      </div>
      <div className="volume-button">ver
      </div>
      <div className="volume-button">
      aca
      </div>
    </>
  )
};

export default Home;
