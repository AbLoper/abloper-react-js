
import Home from './Componenets/pages/Home';
import Navbar from './Componenets/Navbar';
import Profile from './Componenets/pages/Profile';
import BackToTop from './Componenets/Effects/BackToTop';
import Footer from './Componenets/pages/Footer';
import Carousel from './Componenets/Carousel';
import SwiperSlides from './Componenets/SwiperSlides';
import Test from './Componenets/Test';
import Overlay from './Componenets/Effects/Overlay';
import TopicContent from './Componenets/TopicContent';
import { MDBContainer } from 'mdb-react-ui-kit';
export default function App() {

  return (
    <>
      <Navbar />
      <BackToTop />
      <Home />
      <Carousel />
      {/* <SwiperSlides/> */}
      <Profile />
      <Footer/>
      {/* <Test/> */}
      {/* <Overlay/> */}
      {/* <TopicContent/> */}
    </>
  )
}
