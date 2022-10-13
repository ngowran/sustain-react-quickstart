import 'bootstrap/dist/css/bootstrap.min.css';
import './Emissions.css';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { UseTotalContext } from '../hocs/states';

function AddRailEmissions() { 
  const[railDistance, setRailDistance]=useState(0);
  const[railDistanceUnit, setRailDistanceUnit]=useState('');
  const[distanceUnits, setDistanceUnits]=useState([]);

  const { addRailCalculationComponent, countryIsoCode } = UseTotalContext();

  function fetchDistanceUnits(){
    axios
    .get('https://api.sustain.life/v1/reference/distance-units',
      { headers: {
      'Ocp-Apim-Subscription-Key': "02e8beef6800482e937c9721069f6e40"
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
    const rail = {countryIsoCode, railDistance, railDistanceUnit};
    addRailCalculationComponent(rail);    
  };

  return (
    <>
    <div class="container text-center" style={{width: '1000px', padding:'5px'}}>
      <br></br>
      <h4 className="text-warning">Calculate your rail emissions below</h4>
      <br></br>
      <table className='m-auto'>
          <tr className='row'>
            <td style={{width: '300px', textAlign: 'left'}}>
                <p>Rail Distance Travelled</p>
            </td>
            <td style={{width: '300px', textAlign: 'left'}}>
              <input
                className='w-100'
                type="number"
                value={railDistance}
                 onChange={event => {
                 setRailDistance((event.target.value)); 
                  }}
                />                    
              </td>
            <td style={{width: '300px', textAlign: 'left'}}>
              <select onChange={(e)=>setRailDistanceUnit(e.target.value)}>
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

export default AddRailEmissions;