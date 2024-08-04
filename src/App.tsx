import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import InfoStrip from './components/InfoStrip';
import { CarouselSize } from './components/CardCarousel';
import MainItem from './components/MainItem';
import './index.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <InfoStrip />
      <MainItem />
      <CarouselSize />
    </div>
  );
};

export default App;
