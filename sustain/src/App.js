import sustainlogo from './assets/sustainlogo.svg';
import './App.css';
import AddHouseEmissions from './components/AddHouseEmissions';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sustainlogo} className="App-logo" alt="logo" />
        <br></br>
        <h2>Your personal emissions calculator</h2>
        <br></br>
        <div class="text-center" >
        <AddHouseEmissions />
        </div>
      </header>
    </div>
  );
}

export default App;
