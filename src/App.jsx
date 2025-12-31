
import Home from './Componenets/pages/Home';
import Navbar from './Componenets/Navbar';
import Profile from './Componenets/pages/Profile';
import BackToTop from './Componenets/Effects/BackToTop';
import Test from './Componenets/Test';
import Footer from './Componenets/pages/Footer';
export default function App() {

  return (
    <>
      <Navbar />
      <BackToTop />
      <Home />
      <Profile />
      <Footer/>
      {/* <Test/> */}
    </>
  )
}
