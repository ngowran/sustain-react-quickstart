import sustainlogo from './assets/sustainlogo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sustainlogo} className="App-logo" alt="logo" />
        <p>
          Fill out to calculate emissions
        </p>
        
      </header>
    </div>
  );
}

export default App;
