import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Emissions.css';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function AddCarEmissions() {
    // POST variables
    const[total, setTotal]= useState("");
    const[carId, setCarId]= useState("");
    const[clientId, setClientId]= useState("") ;
    const[totalDistance, setTotalDistance]= useState("") ;
    const[totalDistanceUnit, setTotalDistanceUnit]= useState("");
    const[countryIsoCode, setCountryIso]= useState("");
    const access_token = "00c112e599ff4c85bad0cfdacd3bb795";
    const[countries, setCountries]=useState([]);
    const[country, setCountry]=useState([]);
    const[distanceUnits, setDistanceUnits]=useState([]);

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
        const emissions = {carId, clientId, totalDistance, totalDistanceUnit, countryIsoCode}
        console.log(emissions)
        axios
            .post(' https://api.sustain.life/v1/personal-calculator/car',
             {emissions},
              { headers: {
              'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795"
             }})
            .then(res => {
                console.log(res.data.totalCarEmssionsCO2e)
                alert(`Your total household emissions are: ${res.data.totalCarEmssionsCO2e}`)
            })
            .catch(err => {
                console.log(err)
            })
      };

    return (
        <> 
        <div class="container">
            <br></br>
            <h4>Add your car emissions below</h4>
            <br></br>
            <div class="row">
                <div class="col-sm-3">
                <InputGroup className="mb-3">
                    <DropdownButton
                    variant="outline-warning"
                    title="Distance travelled?"
                    id="input-group-dropdown-1"
                >
                        <Form.Control onChange={(e)=>setTotalDistance(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                    </DropdownButton>
                </InputGroup>
                </div>

                <div class="col-sm-2">
                <InputGroup className="mb-3">
                    <DropdownButton
                    variant="outline-warning"
                    title="Units?"
                    id="input-group-dropdown-1"
                    onSelect={(e)=>setTotalDistanceUnit(e)}
                >
                        {distanceUnits.map((distanceUnit) => (
                    <Dropdown.Item  eventKey={`${distanceUnit}`}>{distanceUnit}
                    </Dropdown.Item>
                )
                )}
                    </DropdownButton>
                </InputGroup>
                </div>

                <div class="col-sm-2">
                    <InputGroup className="mb-3  ">
                        <DropdownButton
                        variant="outline-warning"
                        title="Car ID?"
                        id="input-group-dropdown-1"
                        //onSelect={(e)=>setCarId(e)}
                    >
                            <Form.Control onChange={(e)=>setCarId(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                        </DropdownButton>
                    </InputGroup>
                </div>
                <div class="col-sm-2">
                <InputGroup className="mb-3">
                    <DropdownButton
                    variant="outline-warning"
                    title="Client ID?"
                    id="input-group-dropdown-1"
                    //onSelect={(e)=>setClientId(e)}
                >
                        <Form.Control onChange={(e)=>setClientId(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                    </DropdownButton>
                </InputGroup>
                </div>

                <div  className="col-sm-3 overflow-auto" style={{"height": "8.5rem", "position": "relative"}}>
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

export default AddCarEmissions;