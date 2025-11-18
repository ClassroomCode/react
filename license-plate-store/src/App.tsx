import './App.css'
import { Jumbotron } from './jumbotron/Jumbotron';
import { LicensePlate } from './license-plate/LicensePlate';
import { Navigation } from './navigation/Navigation';
import { CALIFORNIA_PLATE, LICENSE_PLATES } from './mock-data';

function App() {
  return (  
    <div>
      <Navigation/>
      <main>
        <Jumbotron title="Welcome to our store" 
          description="Browse our collection of License Plates below" />
        <div className="container" >
          <div className="row" >
            <div className="col-md-4">
              <LicensePlate plate={CALIFORNIA_PLATE} 
                            buttonText="Add to cart"/>    
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App
