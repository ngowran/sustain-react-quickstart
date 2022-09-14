import sustainlogo from './assets/sustainlogo.svg';
import './App.css';
import AddHouseEmissions from './components/AddHouseEmissions';
import AddCarEmissions from './components/AddCarEmissions';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmissionsDropdown from './components/EmissionsDropdowns';
import { TotalsProvider } from './hocs/states';

function App() {
  return (
    <TotalsProvider>
    <div className="App">
      <header className="App-header">
        <br></br><br></br>
        <img src={sustainlogo} className="App-logo" alt="logo" />
        <br></br>
        <h2 className='text-warning'>Your personal emissions calculator</h2>
        <br></br>
        <div class="text-center" >
        <EmissionsDropdown />

        </div>
      </header>
    </div>
    </TotalsProvider>
  );
}

export default App;
