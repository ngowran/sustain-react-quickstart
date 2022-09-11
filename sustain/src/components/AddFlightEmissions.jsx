import 'bootstrap/dist/css/bootstrap.min.css';
import './Emissions.css';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { UseTotalContext } from '../hocs/states';

function AddFlightEmissions() {
  const[clientId, setClientId]= useState("");
  const[sourceAirportCode, setSourceAirportCode]= useState("") ;
  const[destinationAirportCode, setDestinationAirportCode]= useState("") ;
  const[passengerCount, setPassengerCount]= useState("");
  const[isRoundTrip, setIsRoundTrip]= useState("");
  const[cabinType, setCabinType]= useState("");
  const[airports, setAirports]=useState([]);
  const[seats, setSeats]=useState([]);
  const[emissionsValue, setEmissionsValue]=useState(0);

  const { addCalculationComponent } = UseTotalContext();

  function fetchAirport() {
    axios
    .get('https://api.sustain.life/v1/reference/airports',
      { headers: {
      'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795"
    }})
    .then(res => {
      console.log(res.data.items)
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
    .get('https://api.sustain.life/v1/reference/aircraft-seats',
      { headers: {
      'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795"
    }})
    .then(res => {
      console.log(res.data)
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
    const flight = {clientId, sourceAirportCode, destinationAirportCode, passengerCount, isRoundTrip, cabinType}
    addCalculationComponent(flight);
    console.log(flight)
    axios
        .post('https://api.sustain.life/v1/personal-calculator/flight',
         flight,
          { headers: {
          'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795",
          'content-type': 'application/json'
         }})
        .then(res => {
            setEmissionsValue(res.data.totalFlightEmissionsCO2e)
            alert(`Your total household emissions are: ${res.data.totalFlightEmissionsCO2e}`)
        })
        .catch(err => {
            console.log(err)
        })
  };

  return (
    <>
    <div>
      <br></br>
      <h4 className='text-warning'>Calculate your flight emissions below</h4>
      <br></br>
      <table className='m-auto'>
          <tr className='row'>
            <td className="col-md-8">
                <p>Client id</p>
            </td>
            <td className="col-md-4">
              <input
                className='w-100'
                type="number"
                value={clientId}
                onChange={(e)=>setClientId(e.target.value)} 
              /> 
            </td>
          </tr>

          <tr className='row'>
            <td className="col-md-8">
                <p>Cabin Type</p>
            </td>
            <td className="col-md-4">
              <select onChange={(e)=>setCabinType(e.target.value)}>
                <option value=""> Select an option</option>
                {seats.map((seat) => <option key={seat} value={seat}>{seat}</option>)}
              </select>
            </td>
          </tr>

          <tr className='row'>
            <td className="col-md-8">
                <p>Is it a round trip?</p>
            </td>
            <td className="col-md-4">
              <select onChange={(e)=>setIsRoundTrip(e.target.value)}>
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
                value={passengerCount}
                onChange={event => {
                setPassengerCount(+(event.target.value)); 
                }}/>                    
            </td>
          </tr>

          <tr className='row'>
            <td className="col-md-8">
                <p>Fly from</p>
            </td>
            <td className="col-md-4 w-25">
              <select onChange={(e)=>setSourceAirportCode(e.target.value)}>
                <option value=""> Select an option</option>
                {airports.map((airport) => <option key={airport.code} value={airport.code}>{airport.name}</option>)}
              </select>
            </td>
          </tr>

          <tr className='row'>
            <td className="col-md-8">
                <p>Fly to</p>
            </td>
            <td className="col-md-4 w-25">
              <select onChange={(e)=>setDestinationAirportCode(e.target.value)}>
                <option value=""> Select an option</option>
                {airports.map((airport) => <option key={airport.code} value={airport.code}>{airport.name}</option>)}
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
              {emissionsValue} MT C02e
            </td>
          </tr>

      </table>
    </div>
    </>
  );
}

export default AddFlightEmissions;