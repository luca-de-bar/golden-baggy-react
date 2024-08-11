import Navbar from "./components/Navbar";
{
  /* import Carousel from './components/Carousel'; */
}
{
  /*import VideoPlayer from "./components/VideoPlayer";*/
}
{
  /*import DescriptionCard from "./components/DescriptionCard";*/
}
import InfoStrip from "./components/InfoStrip";
import { CardCarousel } from "./components/CardCarousel";
import MainCard from "./components/MainCard";
{
  /*import SingleCard from "./components/SingleCard";*/
}
import InfoSection from "./components/InfoSection";
import GetExclusive from "./components/GetExclusive";
import PromoSection from "./components/PromoSection";
import NewsletterCTA from "./components/Newsletter";
import HeroBanner from "./components/Herobanner";
import MisteryBox from "./components/CardColumns"

import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    <div>
      <Navbar />
      {/*<Carousel />*/}
      <HeroBanner />
      {/*<VideoPlayer /> */}
      <InfoStrip />
      {/*<DescriptionCard />*/}
      <MainCard />
      <GetExclusive />
      <CardCarousel />
      <InfoSection />
      <PromoSection />
      <MisteryBox />
      {/*<SingleCard /> */}
      <NewsletterCTA />
      <Footer />
    </div>
  );
};

export default App;
