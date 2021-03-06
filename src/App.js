
import React from "react";
import './App.css';
import Navbar from "./components/includes/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Products from "./components/pages/Products";
import { HashRouter as Router,Route, Routes } from "react-router-dom";
import Footer from "./components/includes/Footer";


function App() {
  return (
    
    
    <Router>
      <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>}/>
      </Routes>
    
      <Routes>
      <Route path="/about" element={<About/>}/>
      </Routes>

      <Routes>
      <Route path="/product" element={<Products/>}/>
      </Routes>  
      
      <Routes>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
          </div>
          <Routes>
      <Route path="/products" element={<Products/>}/>
      </Routes>
     
          <Footer/>
         
      </Router>
   
      

   
  );
}

export default App;
