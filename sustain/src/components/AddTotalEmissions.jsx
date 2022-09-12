import 'bootstrap/dist/css/bootstrap.min.css';
import './Emissions.css';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { UseTotalContext } from '../hocs/states';

function AddTotalEmissions() {
  const[total, setTotal]= useState(0);
  const[railDistance, setRailDistance]=useState("");
  const[railDistanceUnit, setRailDistanceUnit]=useState("");
  const[distanceUnits, setDistanceUnits]=useState([]);
  const[busDistance, setBusDistance]=useState("");
  const[busDistanceUnit, setBusDistanceUnit]=useState("");
  const { addCalculationComponent, getAllCalculationComponen, countryIsoCode } = UseTotalContext();

  function fetchDistanceUnits(){
    axios
    .get('https://api.sustain.life/v1/reference/distance-units',
      { headers: {
      'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795"
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
    const bus = {countryIsoCode, busDistance, busDistanceUnit}
    const rail = {countryIsoCode, railDistance, railDistanceUnit}
    addCalculationComponent(bus);
    addCalculationComponent(rail);
    const allComponents = getAllCalculationComponen();
    console.log(allComponents)
    axios
        .post('https://api.sustain.life/v1/personal-calculator/total',
         {allComponents},
          { headers: {
          'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795",
          'content-type': 'application/json'
         }})
        .then(res => {
            alert(`Your total emissions are: ${res.data.totalEmissionsCO2e}`)
        })
        .catch(err => {
            console.log(err)
        })
  };

  return (
    <>
    <div class="container">
      <br></br>
      <h4 className="text-warning">Calculate your total emissions below</h4>
      <h6>Takes the emissions from all your other submissions, submit each to add</h6>
      <br></br>
      <table className='m-auto'>
          <tr className='row'>
            <td className="col-md-4">
                <p>Rail Distance Travelled</p>
            </td>
            <td className="col-md-4">
              <input
                className='w-100'
                type="number"
                value={railDistance}
                 onChange={event => {
                 setRailDistance((event.target.value)); 
                  }}
                />                    
              </td>
            <td className="col-md-4">
              <select onChange={(e)=>setRailDistanceUnit(e.target.value)}>
                 <option value=""> Select an option</option>
                     {distanceUnits.map((unit) => <option key={unit} value={unit}>{unit}</option>)}
             </select>
           </td> 
          </tr>

          <tr className='row'>
            <td className="col-md-4">
                <p>Bus Distance Travelled</p>
            </td>
            <td className="col-md-4">
              <input
                className='w-100'
                type="number"
                value={busDistance}
                 onChange={event => {
                 setBusDistance((event.target.value)); 
                  }}
                />                    
              </td>
            <td className="col-md-4">
              <select onChange={(e)=>setBusDistanceUnit(e.target.value)}>
                 <option value=""> Select an option</option>
                     {distanceUnits.map((unit) => <option key={unit} value={unit}>{unit}</option>)}
             </select>
           </td>
          </tr>

          <tr className='row'>
            <td className='col-md-3'>
              <Button variant="warning" style={{width: '100px'}} type="submit" onClick={handleClick}>
                Submit
              </Button>
            </td>
            <td className='col-md-9'>
              {total} MT C02e
            </td>
          </tr>

      </table>
      </div>
    </>
  );
}

export default AddTotalEmissions;