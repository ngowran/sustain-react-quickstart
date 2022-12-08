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
  
  const { addHouseholdCalculationComponent, countryIsoCode, addHouseholdTotal } = UseTotalContext();

  const handleClick=(e)=>{
    const householdWaste = {recyleMetal, recylePlastic, recyleGlass, recyleMagazines, numberOfPeople, countryIsoCode}
    addHouseholdCalculationComponent(householdWaste);
    axios
        .post('https://api.sustain.life/community/v1/personal-calculator/household',
         householdWaste,
          { headers: {
          'Ocp-Apim-Subscription-Key': "5da167febbdf4b04aaea80025aff37cc",
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
      <div class="container text-center" style={{width: '1000px', padding:'5px'}}>
        <br></br>
        <h4 className="text-warning">Calculate your household emissions below</h4>
        <br></br>
        <table className='m-auto'>
          <tr className='row'>
            <td style={{width: '300px', textAlign: 'left'}}>
                <p>Do you recyle metal?</p>
            </td>
            <td style={{width: '300px', textAlign: 'left'}}>
              <select onChange={(e)=>setMetal(e.target.value)}>
                <option value=""> Select an option</option>
                <option key="true" value="true">Yes</option>
                <option key="false" value="false">No</option>
              </select>
            </td>
            <td style={{width: '300px'}}></td>
          </tr>

          <tr className='row'>
            <td style={{width: '300px', textAlign: 'left'}}>
                <p>Do you recyle plastic?</p>
            </td>
            <td style={{width: '300px', textAlign: 'left'}}>
              <select onChange={(e)=>setPlastic(e.target.value)}>
                <option value=""> Select an option</option>
                <option key="true" value="true">Yes</option>
                <option key="false" value="false">No</option>
              </select>
            </td>
            <td style={{width: '300px'}}></td>
          </tr>

          <tr className='row'>
            <td style={{width: '300px', textAlign: 'left'}}>
                <p>Do you recyle glass?</p>
            </td>
            <td style={{width: '300px', textAlign: 'left'}}>
              <select onChange={(e)=>setGlass(e.target.value)}>
                <option value=""> Select an option</option>
                <option key="true" value="true">Yes</option>
                <option key="false" value="false">No</option>
              </select>
            </td>
            <td style={{width: '300px'}}></td>
          </tr>

          <tr className='row'>
            <td style={{width: '300px', textAlign: 'left'}}>
                <p>Do you rcyle magazines?</p>
            </td>
            <td style={{width: '300px', textAlign: 'left'}}>
              <select name="?" onChange={(e)=>setMagazines(e.target.value)}>
                <option value=""> Select an option</option>
                <option key="true" value="true">Yes</option>
                <option key="false" value="false">No</option>
              </select>
            </td>
            <td style={{width: '300px'}}></td>
          </tr>

          <tr className='row'>
            <td style={{width: '300px', textAlign: 'left'}}>
              <p>How many people are in the household?</p>
            </td>
            <td style={{width: '300px', textAlign: 'left'}}>
              <input
                className='w-100'
                type="number"
                value={numberOfPeople}
                onChange={event => {
                setNumPeople(+(event.target.value)); 
                }}/>                    
            </td>
            <td style={{width: '300px'}}></td>
          </tr>

          <tr className='row'>
            <td style={{width: '300px', textAlign: 'left'}}>
              <Button variant="warning" style={{width: '200px'}} type="submit" onClick={handleClick}>
                Set Emissions
              </Button>
            </td>
            <td style={{width: '300px', textAlign: 'left'}}>
              {/* {emissionsValue.toFixed(2)} MT C02e */}
            </td>
            <td style={{width: '300px'}}></td>
          </tr>
        </table>
      </div>   
    </>
  );
}

export default AddHouseEmissions;