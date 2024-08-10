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
  /*import Cart from "./components/Cart"; */
}

{
  /*import SingleCard from "./components/SingleCard";*/
}
import InfoSection from "./components/InfoSection";
{
  /* import PromoSection from "./components/PromoSection"; */
}
import GetExclusive from "./components/GetExclusive";
import NewsletterCTA from "./components/Newsletter";
import HeroBanner from "./components/Herobanner";
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
      {/*<SingleCard /> */}
      {/*<PromoSection /> */}
      <NewsletterCTA />
      <Footer />
      {/*<Cart />*/}
    </div>
  );
};

export default App;
