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
    
      <Button variant="warning" type="submit" onClick={handleClick}>
        Submit
      </Button>
    </div>
      
    </>
  );
}

export default AddTotalEmissions;