import Navbar from "./components/Navbar";
{
  /* import Carousel from './components/Carousel'; */
}
import VideoPlayer from "./components/VideoPlayer";
import DescriptionCard from "./components/DescriptionCard";
import InfoStrip from "./components/InfoStrip";
import { CardCarousel } from "./components/CardCarousel";
import MainCard from "./components/MainCard";
{
  /*import SingleCard from "./components/SingleCard";*/
}
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";
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
      <MainCard />
      <InfoSection />
      <CardCarousel />
      {/*<SingleCard /> */}
      <Footer />
    </div>
  );
};

export default App;
