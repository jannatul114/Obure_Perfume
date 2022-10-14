import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from './Components/Footer/Footer';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
