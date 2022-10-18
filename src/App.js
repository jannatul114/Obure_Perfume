import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Purchase from './Components/Purchase/Purchase';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/purchase/:id' element={<Purchase />}>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
