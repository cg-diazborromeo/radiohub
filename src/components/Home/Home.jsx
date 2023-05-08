import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Vinil from "../Vinil/Vinil";
import PlayButton from "../PlayButton/PlayButton";
import Slider from "../Slider/Slider";
import Radios from "../Radios/Radios";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />

      <PlayButton />
      <Vinil />
      <Slider />
      <Radios />
    </>
  );
};

export default Home;
