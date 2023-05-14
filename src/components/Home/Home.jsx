import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Vinil from "../Vinil/Vinil";
import PlayButton from "../PlayButton/PlayButton";
import CircularSlider from "../CircularSlider/CircularSlider";
import "./Home.css"
import VolumeSettings from "../VolumeSettings/VolumeSettings";
import Radios from "../Radios/Radios";
import FavButton from "../FavButton/FavButton";
import NavButton from "../NavButton/NavButton";


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
          <div className="vinil-container">
            <Vinil />
          </div>
          <div className="button-container" style={{ zIndex: 2, pointerEvents: 'auto' }}>
            <PlayButton />
          </div>
        </div>
      </div>
      <div className="settings-container">
        <div className="n-container">
          <NavButton symbol={<>&#11164;</>}></NavButton>
          <FavButton/>
          <NavButton symbol={<>&#11166;</>}></NavButton>
        </div>
        <div className="volume-container">
          <VolumeSettings />
        </div>
      </div>
      <Radios />
    </>
  )
};

export default Home;
