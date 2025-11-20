import './App.css'
import { Navigation } from './navigation/Navigation';
import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StoreView } from './store-view/StoreView';
import { CheckoutView } from './checkout-view/CheckoutView';
import { CartView } from './cart-view/CartView';
import type { Currency } from './license-plate-data.type';

export interface AppContext {
  currency: Currency,
  updateCurrency: (c: Currency) => void,
};

export const MyContext = createContext<AppContext>({currency: "USD", updateCurrency: () => {}}); 

function App() {

  const [currency, updateCurrency] = useState<Currency>('USD');

  return (  
    <MyContext.Provider value={{currency, updateCurrency}}>
      <div>
        <BrowserRouter>
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<StoreView currency={currency} />}/>
              <Route path="/cart" element={<CartView />} />
              <Route path="/checkout" element={<CheckoutView />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </MyContext.Provider>
  );
}

export default App
