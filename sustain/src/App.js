import sustainlogo from './assets/sustainlogo.svg';
import './App.css';
import AddHouseEmissions from './components/AddHouseEmissions';
import AddCarEmissions from './components/AddCarEmissions';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br></br><br></br>
        <img src={sustainlogo} className="App-logo" alt="logo" />
        <br></br>
        <h2>Your personal emissions calculator</h2>
        <br></br>
        <div class="text-center" >
        <AddHouseEmissions />
        <br></br>
        <AddCarEmissions />
        </div>
      </header>
    </div>
  );
}

export default App;
