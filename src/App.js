import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Products from './Components/Products';
import Contact from './Components/Contact';

import './App.css';
import NotFound from './Components/NotFound';
import ProductInfo from './Components/ProductInfo';

const App = () => {
  return (
    <section className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/products-list" element={<Products />} end />
            <Route path="products-list/contact" element={<Contact />} />
            <Route path="products-list/product/:id" element={<ProductInfo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </section>
  );
};

export default App;
