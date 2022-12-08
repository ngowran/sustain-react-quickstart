import 'bootstrap/dist/css/bootstrap.min.css';
import './Emissions.css';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { UseTotalContext } from '../hocs/states';

function AddFlightEmissions() {
   const[sourceAirportCode, setSourceAirportCode]= useState('') ;
  const[destinationAirportCode, setDestinationAirportCode]= useState('') ;
  const[passengerCount, setPassengerCount]= useState('');
  const[isRoundTrip, setIsRoundTrip]= useState(true);
  const[cabinType, setCabinType]= useState('');
  const[airports, setAirports]=useState([]);
  const[seats, setSeats]=useState([]);
  const[emissionsValue, setEmissionsValue]=useState(0);

  const { addFlightCalculationComponent, addFlightTotal } = UseTotalContext();

  function fetchAirport() {
    axios
    .get('https://api.sustain.life/community/v1/reference/airports',
      { headers: {
      'Ocp-Apim-Subscription-Key': "5da167febbdf4b04aaea80025aff37cc"
    }})
    .then(res => { 
      setAirports(res.data.items)
    })
    .catch(err => {
        console.log(err)
    })
  };

  useEffect(() => {
    fetchAirport();
  }, []);

  function fetchSeats() {
    axios
    .get('https://api.sustain.life/community/v1/reference/aircraft-seats',
      { headers: {
      'Ocp-Apim-Subscription-Key': "5da167febbdf4b04aaea80025aff37cc"
    }})
    .then(res => { 
      setSeats(res.data.items)
    })
    .catch(err => {
        console.log(err)
    })
  };

  useEffect(() => {
    fetchSeats();
  }, []);

  const handleClick=(e)=>{
    const clientId = 1;
    const flight = {clientId, sourceAirportCode, destinationAirportCode, passengerCount, isRoundTrip, cabinType}
    addFlightCalculationComponent(flight);
    axios
        .post('https://api.sustain.life/community/v1/personal-calculator/flight',
         flight,
          { headers: {
          'Ocp-Apim-Subscription-Key': "5da167febbdf4b04aaea80025aff37cc",
          'content-type': 'application/json'
         }})
        .then(res => {
            setEmissionsValue(res.data.totalFlightEmissionsCO2e);
            addFlightTotal(res.data.totalFlightEmissionsCO2e);
        })
        .catch(err => {
            console.log(err)
        })
  };

  return (
    <>
   <div class="container text-center" style={{width: '1000px', padding:'5px'}}>
      <h4 className='text-warning'>Calculate your flight emissions below. You can add as many trips as you would like.</h4>
      <br></br>
      <table className='m-auto'>
        <tr className='row'>
            <td style={{width: '300px', textAlign: 'left'}}>
                <p>Departed From</p>
            </td>
            <td style={{width: '300px', textAlign: 'left'}}>
              <select onChange={(e)=>setSourceAirportCode(e.target.value)}>
                <option value=""> Select an option</option>
                {airports.map((airport) => <option key={airport.code} value={airport.code}>{airport.name}</option>)}
              </select>
            </td> 
            <td style={{width: '300px'}}></td>
          </tr>

          <tr className='row'>
            <td style={{width: '300px', textAlign: 'left'}}>
                <p>Arrived at</p>
            </td>
            <td style={{width: '300px', textAlign: 'left'}}>
              <select onChange={(e)=>setDestinationAirportCode(e.target.value)}>
                <option value=""> Select an option</option>
                {airports.map((airport) => <option key={airport.code} value={airport.code}>{airport.name}</option>)}
              </select>
            </td>
            <td style={{width: '300px'}}></td>
          </tr>

          <tr className='row'>
            <td style={{width: '300px', textAlign: 'left'}}>
              <p>How many passengers?</p>
            </td>
            <td style={{width: '300px', textAlign: 'left'}}>
              <input
                className='w-100'
                type="number"
                value={passengerCount}
                onChange={event => {
                setPassengerCount(+(event.target.value)); 
                }}/>                    
            </td> 
            <td style={{width: '300px'}}></td>       
          </tr>

          <tr className='row'>
            <td style={{width: '300px', textAlign: 'left'}}>
                <p>What type of seat?</p>
            </td>
            <td style={{width: '300px', textAlign: 'left'}}>
              <select onChange={(e)=>setCabinType(e.target.value)}>
                <option value=""> Select an option</option>
                {seats.map((seat) => <option key={seat} value={seat}>{seat}</option>)}
              </select>
            </td> 
            <td style={{width: '300px'}}></td>
          </tr>

          <tr className='row'>
            <td style={{width: '300px', textAlign: 'left'}}>
                <p>Round trip?</p>
            </td>
            <td style={{width: '300px', textAlign: 'left'}}>
              <input type="checkbox" onChange={(e)=>setIsRoundTrip(e.target.value)}></input>
            </td>
            <td style={{width: '300px'}}></td>
          </tr>

          <tr className='row'>
          <td style={{width: '300px', textAlign: 'left'}}>
              <Button variant="warning" style={{width: '200px'}} type="submit" onClick={handleClick}>
                Add Flight
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

export default AddFlightEmissions;