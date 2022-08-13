import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Emissions.css';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function AddHouseEmissions() {
  // POST variables
  const[total, setTotal]= useState("");
  const[recyleMetal, setMetal]= useState("");
  const[recylePlastic, setPlastic]= useState("") ;
  const[recyleGlass, setGlass]= useState("") ;
  const[recyleMagazines, setMagazines]= useState("");
  const[numberOfPeople, setNumPeople]= useState("");
  const[countryIsoCode, setCountryIso]= useState("");
  const access_token = "00c112e599ff4c85bad0cfdacd3bb795";
  const[countries, setCountries]=useState([]);
  const[country, setCountry]=useState([]);

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

  const handleClick=(e)=>{
    const emissions = {recyleMetal, recylePlastic, recyleGlass, recyleMagazines, numberOfPeople, countryIsoCode}
    console.log(emissions)
    axios
        .post('https://api.sustain.life/v1/personal-calculator/household',
         {emissions},
          { headers: {
          'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795"
         }})
        .then(res => {
            console.log(res.data.totalHouseholdWasteEmissionsCO2e)
            alert(`Your total household emissions are: ${res.data.totalHouseholdWasteEmissionsCO2e}`)
        })
        .catch(err => {
            console.log(err)
        })
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <>
    <div class="container">
      <h4>Add your household emissions below</h4>

    <div class="row">
      <div class="col-sm">
      <InputGroup className="mb-3  ">
        <DropdownButton
          variant="outline-warning"
          title="Recyles Metal?"
          id="input-group-dropdown-1"
          onSelect={(e)=>setMetal(e)}
        >
          <Dropdown.Item eventKey="true">Yes</Dropdown.Item>
          <Dropdown.Item eventKey="false">No</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
      </div>

      <div class="col-sm">
      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-warning"
          title="Recyles Plastic?"
          id="input-group-dropdown-1"
          onSelect={(e)=>setPlastic(e)}
        >
          <Dropdown.Item eventKey="true">Yes</Dropdown.Item>
          <Dropdown.Item eventKey="false">No</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
      </div>

      <div class="col-sm">
      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-warning"
          title="Recyles Glass?"
          id="input-group-dropdown-1"
          onSelect={(e)=>setGlass(e)}
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
          title="Recyles Magazines?"
          id="input-group-dropdown-1"
          onSelect={(e)=>setMagazines(e)}
        >
          <Dropdown.Item eventKey="true">Yes</Dropdown.Item>
          <Dropdown.Item eventKey="false">No</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
      </div>

      <div class="col-sm">
      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-warning"
          title="People in Household"
          id="input-group-dropdown-1"  
        >
           <Form.Control onChange={(e)=>setNumPeople(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
        </DropdownButton>
      </InputGroup>
      </div>

      <div  className="col-sm overflow-auto" style={{"height": "8.5rem", "position": "relative"}}>
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

      </div>

      <Button variant="warning" type="submit" onClick={handleClick}>
        Submit
      </Button>
      </div>
      
    </>
  );
}

export default AddHouseEmissions;