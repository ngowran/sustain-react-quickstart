
import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AddCarEmissions from './AddCarEmissions';
import AddHouseEmissions from './AddHouseEmissions';
import AddConsumptionEmissions from './AddConsumptionEmissions';
import EmissionsSummary from './EmissionsSummary';
import AddFlightEmissions from './AddFlightEmissions';
import AddUtilityEmissions from './AddUtilityEmissions';
import AddRailEmissions from './AddRailEmissions';
import AddBusEmissions from './AddBusEmissions';
import AddTotalEmissions from './AddTotalEmissions';
import './Emissions.css';
import axios from 'axios';
import { UseTotalContext } from '../hocs/states';

function PersonalCalculator() {
  const[countries, setCountries]=useState([]);
  const[country, setCountry]=useState();
  const { setCountryIsoCode } = UseTotalContext();
  
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  }
  
  function fetchCountries() {
      axios
      .get('https://api.sustain.life/community/v1/reference/countries',
        { headers: {
        'Ocp-Apim-Subscription-Key': "5da167febbdf4b04aaea80025aff37cc"
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
    <>
    <div>
      <table>
        <tr>
          <td style={{width: '500px', verticalAlign: 'Top'}}>
            <div style={{margin:'10px'}}>          
              <EmissionsSummary/>
            </div>
          </td>
          <td style={{width: '*'}}>
                        
            <div class="container text-center" style={{padding:'5px'}}>          
              <table>
                <tr>
                  
                  
                  <td style={{width: '*'}}>
                    <div>
                      <div style={{marginBottom: '20px', marginLeft: '60px'}}>
                        <table>
                          <tr>
                            <td style={{width: '300px', textAlign: 'left'}}>
                              <span>What country are you in?</span>
                            </td>
                            <td style={{width: '300px', textAlign: 'left'}}>
                              <select onChange={(e)=>handleCountryChange(e)} value={country}>
                                {countries.map((country) => <option key={country.isoCode} value={country.isoCode}>{country.name}</option>)}
                              </select>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <div style={{marginBottom: '20px'}}>
                        <AddCarEmissions />
                      </div>
                      <div style={{marginBottom: '20px'}}>
                        <AddFlightEmissions />
                      </div>
                      <div style={{marginBottom: '20px'}}>
                        <AddBusEmissions />
                      </div>
                      <div style={{marginBottom: '20px'}}>
                        <AddRailEmissions />
                      </div>
                      <div style={{marginBottom: '20px'}}>
                        <AddHouseEmissions />
                      </div>
                      <div style={{marginBottom: '20px'}}>
                        <AddConsumptionEmissions />
                      </div>
                      <div style={{marginBottom: '20px'}}>
                        <AddUtilityEmissions />
                      </div>
                      <div style={{marginBottom: '20px'}}>
                        <AddTotalEmissions/>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>

            </div>
          
          </td>
        </tr>
      </table>
 
    </div> 
    <div>
        <span>© 2022 Sustain.Life</span>
    </div>
    
    </>
  );
}

export default PersonalCalculator;