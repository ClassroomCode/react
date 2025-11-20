import './App.css'
import { Jumbotron } from './jumbotron/Jumbotron';
import { LicensePlate, NoLicensePlates } from './license-plate/LicensePlate';
import { Navigation } from './navigation/Navigation';
import { useEffect, useState } from 'react';
import { PromoBanner } from './promo-banner/PromoBanner';
import { Spinner } from './spinner/Spinner';
import { CheckoutForm } from './checkout-form/CheckoutForm';

function App() {
  const [licensePlates, setPlates] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/data')
      .then(response => response.json())
      .then(data => setPlates(data));
  }, []);

  return (  
    <div>
      <Navigation/>
      <main>
        <Jumbotron title="Welcome to our store" 
          description="Browse our collection of License Plates below" />
        <CheckoutForm/>
        <PromoBanner/>
        <div className="container" >
          { licensePlates.length > 0 ? 
            <div className="row" >
              { licensePlates.length == 0 && <NoLicensePlates/> }
              {licensePlates.map((licensePlate: any) => (
                <div key={licensePlate._id} className="col-md-4 license-plate">
                  <LicensePlate plate={licensePlate} buttonText="Add to cart"/>    
                </div>
              )) }
            </div>
          :
            <Spinner/>
          }
        </div>
      </main>
    </div>
  );
}

export default App
