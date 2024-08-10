import Navbar from './components/Navbar';
{/* import Carousel from './components/Carousel'; */ }
import VideoPlayer from './components/VideoPlayer';
import InfoStrip from './components/InfoStrip';
import { CarouselSize } from './components/CardCarousel';
import MainItem from './components/MainItem';
import './index.css';

const App = () => {
  return (
    <div>
      <Navbar />
      {/*<Carousel />*/ /* This one is optional, to use it you must first comment the VideoPlayer component and import. Choose from these two*/}
      <VideoPlayer />
      <InfoStrip />
      <MainItem />
      <CarouselSize />
    </div>
  );
};

export default App;
