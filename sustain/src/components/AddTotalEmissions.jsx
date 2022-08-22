import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Emissions.css';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function AddTotalEmissions() {
  const[total, setTotal]= useState("");
  const access_token = "00c112e599ff4c85bad0cfdacd3bb795";
  const[countries, setCountries]=useState([]);
  const[country, setCountry]=useState([]);
  const[countryIsoCode, setCountryIso]=useState("");
  const[railDistance, setRailDistance]=useState("");
  const[railDistanceUnit, setRailDistanceUnit]=useState("");
  const[distanceUnits, setDistanceUnits]=useState([]);
  const[busDistance, setBusDistance]=useState("");
  const[busDistanceUnit, setBusDistanceUnit]=useState("");

  function fetchCountries() {
    axios
    .get('https://api.sustain.life/v1/reference/countries',
      { headers: {
      'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795"
    }})
    .then(res => {
      console.log(res.data)
      setCountries(res.data.items)
    })
    .catch(err => {
        console.log(err)
    })
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  function fetchDistanceUnits() {
    axios
    .get('https://api.sustain.life/v1/reference/distance-units',
      { headers: {
      'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795"
    }})
    .then(res => {
      console.log(res.data)
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
    const emissions = {}
    console.log(emissions)
    axios
        .post('https://api.sustain.life/v1/personal-calculator/total',
         {emissions},
          { headers: {
          'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795"
         }})
        .then(res => {
            console.log(res.data.totalEmissionsCO2e)
            alert(`Your total household emissions are: ${res.data.totalEmissionsCO2e}`)
        })
        .catch(err => {
            console.log(err)
        })
  };

  return (
    <>
    <div class="container">
      <br></br>
      <h4>Calculate your total emissions below</h4>
      <br></br>
      
      <div className='row'>
      <div  className="col-sm-4 overflow-auto" style={{"height": "8.5rem", "position": "relative"}}>
                    <InputGroup className="mb-3 text-center">
                        <DropdownButton
                        variant="outline-warning"
                        title="Country of Residence"
                        id="input-group-dropdown-1"
                        onSelect={(e)=>setCountryIso(e)}
                        > 
                        {countries.map((country) => (
                                <Dropdown.Item  eventKey={`${country.isoCode}`}>{country.name}
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
                        title="Rail distance travelled"
                        id="input-group-dropdown-1"  
                        >
                        <Form.Control onChange={(e)=>setRailDistance(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                        </DropdownButton>
                    </InputGroup>
                    </div>

                    <div class="col-sm">
                <InputGroup className="mb-3">
                    <DropdownButton
                    variant="outline-warning"
                    title="Rail travel Units?"
                    id="input-group-dropdown-1"
                    onSelect={(e)=>setRailDistanceUnit(e)}
                >
                        {distanceUnits.map((railDistanceUnits) => (
                    <Dropdown.Item  eventKey={`${railDistanceUnits}`}>{railDistanceUnits}
                    </Dropdown.Item>
                )
                )}
                    </DropdownButton>
                </InputGroup>
                </div>
      </div>

      <div className='row'>
        <div class="col-sm">
                    <InputGroup className="mb-3">
                        <DropdownButton
                        variant="outline-warning"
                        title="Bus distance travelled"
                        id="input-group-dropdown-1"  
                        >
                        <Form.Control onChange={(e)=>setBusDistance(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                        </DropdownButton>
                    </InputGroup>
                    </div>

        <div class="col-sm">
            <InputGroup className="mb-3">
                 <DropdownButton
                    variant="outline-warning"
                    title="Bus travel Units?"
                    id="input-group-dropdown-1"
                    onSelect={(e)=>setBusDistanceUnit(e)}
                >
                        {distanceUnits.map((railDistanceUnits) => (
                    <Dropdown.Item  eventKey={`${railDistanceUnits}`}>{railDistanceUnits}
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

export default AddTotalEmissions;