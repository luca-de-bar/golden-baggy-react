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
{
  /* import PromoSection from "./components/PromoSection"; */
}
import GetExclusive from "./components/GetExclusive";
import NewsletterCTA from "./components/Newsletter";
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
      <GetExclusive />
      <CardCarousel />
      {/*<SingleCard /> */}
      {/*<PromoSection /> */}
      <NewsletterCTA />
      <Footer />
    </div>
  );
};

export default App;
