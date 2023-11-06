import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalog from './Pages/Catalog';
import Home from './Pages/Home';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Selector from './Components/Selector/Selector';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import carTypes from './Components/CarTypes'

function App() {
  // const [selectedCarType, setSelectedCarType] = useState('');

  // const handleCarTypeChange = (e) => {
  //   setSelectedCarType(e.target.value);
  // };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
