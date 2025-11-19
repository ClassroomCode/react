import './App.css'
import { Jumbotron } from './jumbotron/Jumbotron';
import { LicensePlate } from './license-plate/LicensePlate';
import { Navigation } from './navigation/Navigation';
import { LICENSE_PLATES } from './mock-data';

function App() {
  return (  
    <div>
      <Navigation/>
      <main>
        <Jumbotron title="Welcome to our store" 
          description="Browse our collection of License Plates below" />
        <div className="container" >
          <div className="row" >
            {LICENSE_PLATES.map((licensePlate) => (
              <div key={licensePlate._id} className="col-md-4 license-plate">
                <LicensePlate plate={licensePlate} buttonText="Add to cart"/>    
              </div>
            )) }
          </div>
        </div>
      </main>
    </div>
  );
}

export default App
