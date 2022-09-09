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

function AddUtilityEmissions() {
    // POST variables
    const[total, setTotal]= useState("");
    const[utilityCompanyId, setUtilityCompanyId]= useState("");
    const[zipCode, setZipCode]= useState("") ;
    const[electricalUsage, setElectricalUsage]= useState("") ;
    const[electricalUsageUnit, setElectricalUsageUnit]= useState("");
    const[naturalGasUsage, setNaturalGasUsage]= useState("");
    const[naturalGasUsageUnit, setNaturalGasUsageUnit]= useState("");
    const[fuelOilUsage, setFuelOilUsage]= useState("");
    const[fuelOilUsageUnit, setFuelOilUsageUnit]= useState("");
    const[propaneUsage, setPropaneUsage]= useState("");
    const[propaneUsageUnit, setPropaneUsageUnit]= useState("");
    const[woodPelletUsage, setWoodPelletUsage]= useState("");
    const[woodPelletUsageUnit, setWoodPelletUsageUnit]= useState("");
    const[countryIsoCode, setCountryIso]= useState("");
    const access_token = "00c112e599ff4c85bad0cfdacd3bb795";
    const[countries, setCountries]=useState([]);
    const[country, setCountry]=useState([]);
    const[company, setCompany]=useState([]);
    const[electricalUnit, setElectricalUnit]=useState([]);
    const[naturalUnit, setNaturalUnit]=useState([]);
    const[fuelOil, setFuelOil]=useState([]);
    const[propaneUnit, setPropaneUnit]=useState([]);
    const[woodenPellet, setWoodenPellet]=useState([]);

    const { addCalculationComponent } = UseTotalContext();

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
    
      function fetchCompany() {
        axios
        .get('https://api.sustain.life/v1/reference/utility-companies',
          { headers: {
          'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795"
        }})
        .then(res => {
          console.log(res.data)
          setCompany(res.data.items)
        })
        .catch(err => {
            console.log(err)
        })
      };

    useEffect(() => {
        fetchCompany();
      }, []);

    const setVars = (e) => {
        console.log(e);
        setUtilityCompanyId(company[e].utilityCompanyId)
        setZipCode(company[e].zipCode)
    }


    function fetchElectricUnits() {
        axios
        .get('https://api.sustain.life/v1/reference/electrical-units',
          { headers: {
          'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795"
        }})
        .then(res => {
          console.log(res.data)
          setElectricalUnit(res.data.items)
        })
        .catch(err => {
            console.log(err)
        })
      };

    useEffect(() => {
        fetchElectricUnits();
      }, []);

    
      function fetchNaturalUnits() {
        axios
        .get('https://api.sustain.life/v1/reference/natural-gas-units',
          { headers: {
          'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795"
        }})
        .then(res => {
          console.log(res.data)
          setNaturalUnit(res.data.items)
        })
        .catch(err => {
            console.log(err)
        })
      };

    useEffect(() => {
        fetchNaturalUnits();
      }, []);


      function fetchFuelOil() {
        axios
        .get('https://api.sustain.life/v1/reference/fuel-oil-units',
          { headers: {
          'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795"
        }})
        .then(res => {
          console.log(res.data)
          setFuelOil(res.data.items)
        })
        .catch(err => {
            console.log(err)
        })
      };

    useEffect(() => {
        fetchFuelOil();
      }, []);

      function fetchPropaneUnit() {
        axios
        .get('https://api.sustain.life/v1/reference/propane-units',
          { headers: {
          'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795"
        }})
        .then(res => {
          console.log(res.data)
          setPropaneUnit(res.data.items)
        })
        .catch(err => {
            console.log(err)
        })
      };

    useEffect(() => {
        fetchPropaneUnit();
      }, []);

      function fetchWoodenPellet() {
        axios
        .get('https://api.sustain.life/v1/reference/wood-pellet-units',
          { headers: {
          'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795"
        }})
        .then(res => {
          console.log(res.data)
          setWoodenPellet(res.data.items)
        })
        .catch(err => {
            console.log(err)
        })
      };

    useEffect(() => {
        fetchWoodenPellet();
      }, []);



    const handleClick=(e)=>{
        const utilities = {utilityCompanyId, zipCode, electricalUsage, electricalUsageUnit, naturalGasUsage, 
            naturalGasUsageUnit, fuelOilUsage, fuelOilUsageUnit, propaneUsage, propaneUsageUnit, woodPelletUsage,
             woodPelletUsageUnit, countryIsoCode}
        addCalculationComponent(utilities);
        axios
            .post('https://api.sustain.life/v1/personal-calculator/utilities',
            {utilityCompanyId, zipCode, electricalUsage, electricalUsageUnit, naturalGasUsage, 
                naturalGasUsageUnit, fuelOilUsage, fuelOilUsageUnit, propaneUsage, propaneUsageUnit, woodPelletUsage,
                 woodPelletUsageUnit, countryIsoCode},
              { headers: {
              'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795",
              'content-type': 'application/json'
             }})
            .then(res => {
                console.log(res.data.totalUtilityEmissionsCO2e)
                alert(`Your total household emissions are: ${res.data.totalUtilityEmissionsCO2e}`)
            })
            .catch(err => {
                console.log(err)
            })
      };

    return (
        <> 
        <div class="container">
            <br></br>
            <h4>Add your utility emissions below</h4>
            <br></br>
            <div class="row">
                <div class="col-sm-4">
                <InputGroup className="mb-3">
                    <DropdownButton
                    variant="outline-warning"
                    title="Company Name"
                    id="input-group-dropdown-1"
                    onSelect={(e)=>setVars(e)}
                >
                        {company.map((company, index) => (
                    <Dropdown.Item  eventKey={`${index}`}>{company.utilityName}
                    </Dropdown.Item>
                )
                )}
                    </DropdownButton>
                </InputGroup>
                </div>

                <div class="col-sm-4">
                <InputGroup className="mb-3">
                    <DropdownButton
                    variant="outline-warning"
                    title="Electrical usage"
                    id="input-group-dropdown-1"
                >
                        <Form.Control onChange={(e)=>setElectricalUsage(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                    </DropdownButton>
                </InputGroup>
                </div>

                <div class="col-sm-4">
                <InputGroup className="mb-3">
                    <DropdownButton
                    variant="outline-warning"
                    title="Electrical usage unit"
                    id="input-group-dropdown-1"
                    onSelect={(e)=>setElectricalUsageUnit(e)}
                >
                       {electricalUnit.map((electricalUnit) => (
                                <Dropdown.Item  eventKey={`${electricalUnit}`}>{electricalUnit}
                                </Dropdown.Item>
                                )
                                )}
                    </DropdownButton>
                    
                </InputGroup>
                </div>
                </div>

                <div className='row'>
                <div class="col-sm-4">
                <InputGroup className="mb-3">
                    <DropdownButton
                    variant="outline-warning"
                    title="Natural gas usage"
                    id="input-group-dropdown-1"
                >
                        <Form.Control onChange={(e)=>setNaturalGasUsage(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                    </DropdownButton>
                </InputGroup>
                </div>

                <div class="col-sm-4">
                <InputGroup className="mb-3">
                    <DropdownButton
                    variant="outline-warning"
                    title="Natural gas usage unit"
                    id="input-group-dropdown-1"
                    onSelect={(e)=>setNaturalGasUsageUnit(e)}
                >
                        {naturalUnit.map((naturalUnit) => (
                                <Dropdown.Item  eventKey={`${naturalUnit}`}>{naturalUnit}
                                </Dropdown.Item>
                                )
                                )}
                    </DropdownButton>
                </InputGroup>
                </div>

                <div class="col-sm-4">
                <InputGroup className="mb-3">
                    <DropdownButton
                    variant="outline-warning"
                    title="Fuel oil usage"
                    id="input-group-dropdown-1"
                >
                        <Form.Control onChange={(e)=>setFuelOilUsage(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                    </DropdownButton>
                </InputGroup>
                </div>
                </div>

                <div className='row'>

                <div class="col-sm-4">
                <InputGroup className="mb-3">
                    <DropdownButton
                    variant="outline-warning"
                    title="Fuel oil usage unit"
                    id="input-group-dropdown-1"
                    onSelect={(e)=>setFuelOilUsageUnit(e)}
                >
                        {fuelOil.map((fuelOil) => (
                                <Dropdown.Item  eventKey={`${fuelOil}`}>{fuelOil}
                                </Dropdown.Item>
                                )
                                )}
                    </DropdownButton>
                </InputGroup>
                </div>

                <div class="col-sm-4">
                <InputGroup className="mb-3">
                    <DropdownButton
                    variant="outline-warning"
                    title="Propane usage"
                    id="input-group-dropdown-1"
                >
                        <Form.Control onChange={(e)=>setPropaneUsage(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                    </DropdownButton>
                </InputGroup>
                </div>

                <div class="col-sm-4">
                <InputGroup className="mb-3">
                    <DropdownButton
                    variant="outline-warning"
                    title="Propane usage unit"
                    id="input-group-dropdown-1"
                    onSelect={(e)=>setPropaneUsageUnit(e)}
                >
                        {propaneUnit.map((propaneUnit) => (
                                <Dropdown.Item  eventKey={`${propaneUnit}`}>{propaneUnit}
                                </Dropdown.Item>
                                )
                                )}
                    </DropdownButton>
                </InputGroup>
                </div>
                </div>

                <div className='row'>
                <div class="col-sm-4">
                <InputGroup className="mb-3">
                    <DropdownButton
                    variant="outline-warning"
                    title="Wooden pellet usage"
                    id="input-group-dropdown-1"
                >
                        <Form.Control onChange={(e)=>setWoodPelletUsage(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                    </DropdownButton>
                </InputGroup>
                </div>

                
                <div class="col-sm-4">
                <InputGroup className="mb-3">
                    <DropdownButton
                    variant="outline-warning"
                    title="Wooden Pellet usage unit"
                    id="input-group-dropdown-1"
                    onSelect={(e)=>setWoodPelletUsageUnit(e)}
                >
                        {woodenPellet.map((woodenPellet) => (
                                <Dropdown.Item  eventKey={`${woodenPellet}`}>{woodenPellet}
                                </Dropdown.Item>
                                )
                                )}
                    </DropdownButton>
                </InputGroup>
                </div>

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
           
                </div>

               

            <Button variant="warning" type="submit" onClick={handleClick}>
                Submit
            </Button>
            
        </div>
        </>
  );

}

export default AddUtilityEmissions;