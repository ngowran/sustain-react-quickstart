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
  
  const { addCalculationComponent, countryIsoCode, addHouseholdTotal } = UseTotalContext();

  const handleClick=(e)=>{
    const householdWaste = {recyleMetal, recylePlastic, recyleGlass, recyleMagazines, numberOfPeople, countryIsoCode}
    addCalculationComponent(householdWaste);
    axios
        .post('https://api.sustain.life/v1/personal-calculator/household',
         householdWaste,
          { headers: {
          'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795",
          'content-type': 'application/json'
         }})
        .then(res => {
            setEmissionsValue(res.data.totalHouseholdWasteEmissionsCO2e);
            addHouseholdTotal(res.data.totalHouseholdWasteEmissionsCO2e);
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
                <p>Do you recyle metal?</p>
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
                <p>Do you recyle plastic?</p>
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
                <p>Do you recyle glass?</p>
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
                <p>Do you rcyle magazines?</p>
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
              <p>How many people are in the household?</p>
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
              Add
              </Button>
            </td>
            <td className='col-md-9'>
              {emissionsValue.toFixed(2)} MT C02e
            </td>
          </tr>
        </table>
      </div>   
    </>
  );
}

export default AddHouseEmissions;