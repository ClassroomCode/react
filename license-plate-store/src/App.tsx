import './App.css'
import { Jumbotron } from './jumbotron/Jumbotron';
import { LicensePlate, NoLicensePlates } from './license-plate/LicensePlate';
import { Navigation } from './navigation/Navigation';
import { useEffect, useState } from 'react';
import { PromoBanner } from './promo-banner/PromoBanner';
import { Spinner } from './spinner/Spinner';
import { CheckoutForm } from './checkout-form/CheckoutForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StoreView } from './store-view/StoreView';
import { CheckoutView } from './checkout-view/CheckoutView';
import { CartView } from './cart-view/CartView';

function App() {

  return (  
    <div>
      <BrowserRouter>
        <Navigation/>
        <main>
          <Routes>
            <Route path="/" element={<StoreView/>}/>
            <Route path="/cart" element={<CartView />} />
            <Route path="/checkout" element={<CheckoutView />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App
