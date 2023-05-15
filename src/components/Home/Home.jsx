import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Vinyl from "../Vinyl/Vinyl";
import PlayButton from "../PlayButton/PlayButton";
import CircularSlider from "../CircularSlider/CircularSlider";
import VolumeSettings from "../VolumeSettings/VolumeSettings";
import Radios from "../Radios/Radios";
import NavSettings from "../NavSettings/NavSettings";
import "./Home.css"


const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="parent-container">
        <div className="slider-container" style={{ zIndex: 1, pointerEvents: 'auto' }}>
          <CircularSlider />
        </div>
        <div className="radio-container">
          <div className="vinyl-container">
            <Vinyl />
          </div>
          <div className="button-container" style={{ zIndex: 2, pointerEvents: 'auto' }}>
            <PlayButton />
          </div>
        </div>
      </div>
      <div className="settings-container">
        <NavSettings />
        <div className="volume-container">
          <VolumeSettings />
        </div>
      </div>
      <Radios />
    </>
  )
};

export default Home;
