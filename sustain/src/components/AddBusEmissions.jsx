import 'bootstrap/dist/css/bootstrap.min.css';
import './Emissions.css';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { UseTotalContext } from '../hocs/states';

function AddBusEmissions() { 
  const[distanceUnits, setDistanceUnits]=useState([]);
  const[busDistance, setBusDistance]=useState(0);
  const[busDistanceUnit, setBusDistanceUnit]=useState('');
  
  const { addBusCalculationComponent, countryIsoCode } = UseTotalContext();

  function fetchDistanceUnits(){
    axios
    .get('https://api.sustain.life/community/v1/reference/distance-units',
      { headers: {
      'Ocp-Apim-Subscription-Key': "5da167febbdf4b04aaea80025aff37cc"
    }})
    .then(res => {
      setDistanceUnits(res.data.items)
    })
    .catch(err => {
        console.log(err)
    })
  };

useEffect(() => {
    fetchDistanceUnits();
  }, []);

  const handleClick=(e)=>{
    const bus = {countryIsoCode, busDistance, busDistanceUnit};
    addBusCalculationComponent(bus);
  };

  return (
    <>  
    <div class="container text-center" style={{width: '1000px', padding:'5px'}}>
      <h4 className="text-warning">Calculate your bus emissions below</h4>
      <br></br>
      <table className='m-auto'>
          <tr className='row'>
            <td style={{width: '300px', textAlign: 'left'}}>
                <p>Bus Distance Travelled</p>
            </td>
            <td style={{width: '300px', textAlign: 'left'}}>
              <input
                className='w-100'
                type="number"
                value={busDistance}
                 onChange={event => {
                 setBusDistance((event.target.value)); 
                  }}
                />                    
              </td>
            <td style={{width: '300px', textAlign: 'left'}}>
              <select onChange={(e)=>setBusDistanceUnit(e.target.value)}>
                <option value=""> Select an option</option>
                  {distanceUnits.map((unit) => <option key={unit} value={unit}>{unit}</option>)}
             </select>
           </td>
          </tr>

          <tr className='row'>
            <td style={{width: '300px', textAlign: 'left'}}>  
              <Button variant="warning" style={{width: '200px'}} type="submit" onClick={handleClick}>
                Set Emissions
              </Button>
            </td>
            <td>
            </td>
          </tr>

      </table>
      </div>
    </>
  );
}

export default AddBusEmissions;