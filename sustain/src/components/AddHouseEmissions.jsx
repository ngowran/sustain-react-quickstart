import 'bootstrap/dist/css/bootstrap.min.css';
import './Emissions.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { UseTotalContext } from '../hocs/states';

function AddHouseEmissions() {
  const[recyleMetal, setMetal]= useState("");
  const[recylePlastic, setPlastic]= useState("") ;
  const[recyleGlass, setGlass]= useState("") ;
  const[recyleMagazines, setMagazines]= useState("");
  const[numberOfPeople, setNumPeople]= useState("");
  const[emissionsValue, setEmissionsValue]=useState(0);
  const { addCalculationComponent, countryIsoCode } = UseTotalContext();

  const handleClick=(e)=>{
    const householdWaste = {recyleMetal, recylePlastic, recyleGlass, recyleMagazines, numberOfPeople, countryIsoCode}
    addCalculationComponent(householdWaste);
    console.log(householdWaste)
    axios
        .post('https://api.sustain.life/v1/personal-calculator/household',
         householdWaste,
          { headers: {
          'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795",
          'content-type': 'application/json'
         }})
        .then(res => {
            setEmissionsValue(res.data.totalHouseholdWasteEmissionsCO2e);
            console.log(emissionsValue)
          
        })
        .catch(err => {
            console.log(err)
        })
  };

  return (
    <>
      <div>
        <br></br>
        <h4 className="text-warning">Calculate your household emissions below</h4>
        <br></br>
        <table className='m-auto'>
          <tr className='row'>
            <td className="col-md-8">
                <p>Recyles Metal?</p>
            </td>
            <td className="col-md-4">
              <select onChange={(e)=>setMetal(e.target.value)}>
                <option value=""> Select an option</option>
                <option key="true" value="true">Yes</option>
                <option key="false" value="false">No</option>
              </select>
            </td>
          </tr>

          <tr className='row'>
            <td className="col-md-8">
                <p>Recyles Plastic?</p>
            </td>
            <td className="col-md-4">
              <select onChange={(e)=>setPlastic(e.target.value)}>
                <option value=""> Select an option</option>
                <option key="true" value="true">Yes</option>
                <option key="false" value="false">No</option>
              </select>
            </td>
          </tr>

          <tr className='row'>
            <td className="col-md-8">
                <p>Recyles Glass?</p>
            </td>
            <td className="col-md-4">
              <select onChange={(e)=>setGlass(e.target.value)}>
                <option value=""> Select an option</option>
                <option key="true" value="true">Yes</option>
                <option key="false" value="false">No</option>
              </select>
            </td>
          </tr>

          <tr className='row'>
            <td className="col-md-8">
                <p>Recyles Magazines?</p>
            </td>
            <td className="col-md-4">
              <select name="?" onChange={(e)=>setMagazines(e.target.value)}>
                <option value=""> Select an option</option>
                <option key="true" value="true">Yes</option>
                <option key="false" value="false">No</option>
              </select>
            </td>
          </tr>

          <tr className='row'>
            <td className="col-md-8">
              <p>Number of People</p>
            </td>
            <td className="col-md-4">
              <input
                className='w-100'
                type="number"
                value={numberOfPeople}
                onChange={event => {
                setNumPeople(+(event.target.value)); 
                }}/>                    
            </td>
          </tr>

          <tr className='row'>
            <td className='col-md-3'>
              <Button variant="warning" style={{width: '100px'}} type="submit" onClick={handleClick}>
                Submit
              </Button>
            </td>
            <td className='col-md-9'>
              {emissionsValue} MT C02e
            </td>
          </tr>
        </table>
      </div>   
    </>
  );
}

export default AddHouseEmissions;