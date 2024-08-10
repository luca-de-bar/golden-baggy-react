import Navbar from "./components/Navbar";
{
  /* import Carousel from './components/Carousel'; */
}
import VideoPlayer from "./components/VideoPlayer";
import DescriptionCard from "./components/DescriptionCard";
import InfoStrip from "./components/InfoStrip";
import { CarouselSize } from "./components/CardCarousel";
import MainItem from "./components/MainItem";
import SingleCard from "./components/SingleCard";
import "./index.css";

const App = () => {
  return (
    <div>
      <Navbar />
      {/*<Carousel />*/
      /* Can choose if you want to use this instead of VideoPlayer but please DO NOT use them both on the homepage.*/}
      <VideoPlayer />
      <InfoStrip />
      <DescriptionCard />
      <MainItem />
      <CarouselSize />
      <SingleCard />
    </div>
  );
};

export default App;
