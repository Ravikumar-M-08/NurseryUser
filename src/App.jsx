import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Footer from './Components/Footer';
import Gardening from './Components/Gardening';
import Plants from './Components/Plants';
import Seeds from './Components/Seeds';
import Bubls from './Components/bubls';
import Plots from './Components/Plots';
import Fertilizer from './Components/fertilizer';
import Accessories from './Components/Accessories';
import Login from './Components/Login';
import Register from './Components/Register';
import Control from './Components/Control';
// import Addtocart from './Components/Addtocart';

function App() {
  const [cart,setcart] = useState([]);
  const [quantity,setquantity] = useState();
  return (
    <>
      <BrowserRouter>
       <Nav/>
        <Routes>
          <Route path="/" element={<Home cart={cart} setcart={setcart} quantity={quantity} setquantity={setquantity} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cart={cart} setcart={setcart} quantity={quantity} setquantity={setquantity}/>} />
          <Route path="/gardening" element={<Gardening cart={cart} setcart={setcart} quantity={quantity} setquantity={setquantity}  />} />
          <Route path="/plants" element={<Plants cart={cart} setcart={setcart} quantity={quantity} setquantity={setquantity} />} />
          <Route path="/seeds" element={<Seeds cart={cart} setcart={setcart} quantity={quantity} setquantity={setquantity} />} />
          <Route path="/bubls" element={<Bubls cart={cart} setcart={setcart} quantity={quantity} setquantity={setquantity} />} />
          <Route path="/plots" element={<Plots cart={cart} setcart={setcart} quantity={quantity} setquantity={setquantity} />} />
          <Route path="/fertilizer" element={<Fertilizer cart={cart} setcart={setcart} quantity={quantity} setquantity={setquantity} />} />
          <Route path="/accessories" element={<Accessories cart={cart} setcart={setcart} quantity={quantity} setquantity={setquantity} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/control" element={<Control cart={cart} setcart={setcart} quantity={quantity} setquantity={setquantity}/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>  

    </>
  )
}

export default App;
