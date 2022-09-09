import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Emissions.css';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { UseTotalContext } from '../hocs/states';

function AddFlightEmissions() {
  const[total, setTotal]= useState("");
  const[clientId, setClientId]= useState("");
  const[sourceAirportCode, setSourceAirportCode]= useState("") ;
  const[destinationAirportCode, setDestinationAirportCode]= useState("") ;
  const[passengerCount, setPassengerCount]= useState("");
  const[isRoundTrip, setIsRoundTrip]= useState("");
  const[cabinType, setCabinType]= useState("");
  const access_token = "00c112e599ff4c85bad0cfdacd3bb795";
  const[airports, setAirports]=useState([]);
  const[airport, setAirport]=useState([]);
  const[seats, setSeats]=useState([]);
  const[seat, setSeat]=useState([]);

  const { totals, setTotals } = UseTotalContext();

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
    setTotals({...totals, flight})
    console.log(JSON.stringify({ clientId, sourceAirportCode, destinationAirportCode, passengerCount, isRoundTrip, cabinType}))
    axios
        .post('https://api.sustain.life/v1/personal-calculator/flight',
         flight,
          { headers: {
          'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795",
          'content-type': 'application/json'
         }})
        .then(res => {
            console.log(res.data.totalFlightEmissionsCO2e)
            alert(`Your total household emissions are: ${res.data.totalFlightEmissionsCO2e}`)
        })
        .catch(err => {
            console.log(err)
        })
  };

  return (
    <>
    <div class="container">
      <br></br>
      <h4>Add your household emissions below</h4>
      <br></br>
    <div class="row">
      <div class="col-sm">
      <InputGroup className="mb-3  ">
        <DropdownButton
          variant="outline-warning"
          title="Client id"
          id="input-group-dropdown-1"
          //onSelect={(e)=>setMetal(e)}
        >
           <Form.Control onChange={(e)=>setClientId(`flight${e.target.value}`)} aria-label="Text input with dropdown button" defaultValue="1" />
        </DropdownButton>
      </InputGroup>
      </div>

      <div class="col-sm">
        <InputGroup className="mb-3">
          <DropdownButton
            variant="outline-warning"
            title="Cabin Type"
            id="input-group-dropdown-1"
            onSelect={(e)=>setCabinType(e)}
          >
            {seats.map((seat) => (
                    <Dropdown.Item  eventKey={`${seat}`}>{seat}
                    </Dropdown.Item>
                  )
                )}
          </DropdownButton>
        </InputGroup>
      </div>

      <div class="col-sm">
        <InputGroup className="mb-3">
          <DropdownButton
            variant="outline-warning"
            title="Is it a round trip?"
            id="input-group-dropdown-1"
            onSelect={(e)=>setIsRoundTrip(e)}
            >
            <Dropdown.Item eventKey="true">Yes</Dropdown.Item>
            <Dropdown.Item eventKey="false">No</Dropdown.Item>
          </DropdownButton>
        </InputGroup>
      </div>
    </div>

      <div class="row">
      

        <div class="col-sm">
          <InputGroup className="mb-3">
            <DropdownButton
              variant="outline-warning"
              title="Passenger Count"
              id="input-group-dropdown-1"  
            >
              <Form.Control onChange={(e)=>setPassengerCount(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
            </DropdownButton>
          </InputGroup>
        </div>

        <div  className="col-sm overflow-auto" style={{"height": "8.5rem", "position": "relative"}}>
          <InputGroup className="mb-3 text-center">
            <DropdownButton
              variant="outline-warning"
              title="Fly from"
              id="input-group-dropdown-1"
              onSelect={(e)=>setSourceAirportCode(e)}
            > 
              {airports.map((airport) => (
                    <Dropdown.Item  eventKey={`${airport.code}`}>{airport.name}
                    </Dropdown.Item>
                  )
                )}
            </DropdownButton>
          </InputGroup>
        </div>

        <div  className="col-sm overflow-auto" style={{"height": "8.5rem", "position": "relative"}}>
          <InputGroup className="mb-3 text-center">
            <DropdownButton
              variant="outline-warning"
              title="Fly to"
              id="input-group-dropdown-1"
              onSelect={(e)=>setDestinationAirportCode(e)}
            > 
              {airports.map((airport) => (
                    <Dropdown.Item  eventKey={`${airport.code}`}>{airport.name}
                    </Dropdown.Item>
                  )
                )}
            </DropdownButton>
          </InputGroup>
        </div>


      </div>

      <Button variant="warning" type="submit" onClick={handleClick}>
        Submit
      </Button>
    </div>
      
    </>
  );
}

export default AddFlightEmissions;