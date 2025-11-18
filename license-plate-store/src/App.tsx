import './App.css'
import { Jumbotron } from './jumbotron/Jumbotron';
import { Navigation } from './navigation/Navigation';

function App() {
  return (  
    <div>
      <Navigation/>
      <main>
        <Jumbotron title="Welcome to our store" 
          description="Browse our collection of License Plates below" />
      </main>
    </div>
  );
}

export default App
