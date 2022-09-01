
import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AddCarEmissions from './AddCarEmissions';
import AddHouseEmissions from './AddHouseEmissions';
import AddConsumptionEmissions from './AddConsumptionEmissions';
import AddFlightEmissions from './AddFlightEmissions';
import AddUtilityEmissions from './AddUtilityEmissions';
import AddTotalEmissions from './AddTotalEmissions';
import './Emissions.css';
import axios from 'axios';
import { UseTotalContext } from '../hocs/states';


function EmissionsDropdown() {

  const[countries, setCountries]=useState([]);
  const[country, setCountry]=useState();
  const { setCountryIsoCode } = UseTotalContext();
  
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  }
  

  function fetchCountries() {
      axios
      .get('https://api.sustain.life/v1/reference/countries',
        { headers: {
        'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795"
      }})
      .then(res => {
          const locations = res.data.items;
          const sortedLocations = locations.sort(function(a, b){
              if(a.isoCode === 'usa') { return -1; }
              if(a.firstname > b.firstname) { return 1; }
              return 0;
          })
          
          setCountries(sortedLocations);
      })
      .catch(err => {
          console.log(err)
      })  
  };

  useEffect(() => {
      if(countries.length === 0)
          fetchCountries();
  }, []);

  useEffect(() => {
    if(country)
      setCountryIsoCode(country);
  }, [country]);

  return (
    <div >

        <table>
          <tr>
              <td>
                  <span>Country of Residence</span>
              </td>
              <td>
                  <select onChange={(e)=>handleCountryChange(e)} value={country}>
                      {countries.map((country) => <option key={country.isoCode} value={country.isoCode}>{country.name}</option>)}
                  </select>
              </td>
              <td></td>
          </tr>
        </table>
    <Accordion>
      <Accordion.Item eventKey="0"  className='dropdown'>
        <Accordion.Header>Car Emissions</Accordion.Header>
        <Accordion.Body>
         <AddCarEmissions />
        </Accordion.Body>

      </Accordion.Item>
      <Accordion.Item eventKey="1"  className='dropdown'>
        <Accordion.Header>Household Emissions</Accordion.Header>
        <Accordion.Body>
          <AddHouseEmissions />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2"  className='dropdown'>
        <Accordion.Header>Consumption Emissions</Accordion.Header>
        <Accordion.Body>
          <AddConsumptionEmissions />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3"  className='dropdown'>
        <Accordion.Header>Flight Emissions</Accordion.Header>
        <Accordion.Body>
          <AddFlightEmissions />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4"  className='dropdown'>
        <Accordion.Header>Utlity Emissions</Accordion.Header>
        <Accordion.Body>
          <AddUtilityEmissions />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5"  className='dropdown'>
        <Accordion.Header>Total Emissions</Accordion.Header>
        <Accordion.Body>
          <AddTotalEmissions />
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
    </div>
  );
}

export default EmissionsDropdown;