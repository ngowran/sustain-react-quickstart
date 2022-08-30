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

function AddConsumptionEmissions() {
    const[foodDrinkHeavyMeatEaterSpending, setFoodDrinkHeavyMeatEaterSpending]= useState("");
    const[foodDrinkMediumMeatEaterSpending, setFoodDrinkMediumMeatEaterSpending]= useState("");
    const[foodDrinkLightMeatEaterSpending, setFoodDrinkLightMeatEaterSpending]= useState("") ;
    const[foodDrinkVegetarianSpending, setFoodDrinkVegetarianSpending]= useState("") ;
    const[foodDrinkVeganSpending, setFoodDrinkVeganSpending]= useState("");
    const[pharmaceuticalsSpending, setPharmaceuticalsSpending]= useState("");
    const[clothesShoesSpending, setClothesShoesSpending]= useState("");
    const[paperProductsSpending, setPaperProductsSpending]= useState("");
    const[computersITEquipmentSpending, setComputersITEquipmentSpending]= useState("");
    const[motorVehiclesExFuelSpending, setMotorVehiclesExFuelSpending]= useState("");
    const[furnitureSpending, setFurnitureSpending]= useState("");
    const[hotelsRestuarantsSpending, setHotelsRestuarantsSpending]= useState("");
    const[cellPhonesSpending, setCellPhonesSpending]= useState("");
    const[bankingFinanceSpending, setBankingFinanceSpending]= useState("");
    const[insuranceSpending, setInsuranceSpending]= useState("");
    const[educationSpending, setEducationSpending]= useState("");
    const[recreationalAndCultureSpending, setRecreationalAndCultureSpending]= useState("");
    const[countryIsoCode, setCountryIso]= useState("");
    const access_token = "00c112e599ff4c85bad0cfdacd3bb795";
    const[countries, setCountries]=useState([]);
    const[country, setCountry]=useState([]);
    const[distanceUnits, setDistanceUnits]=useState([]);
    
    const { totals, setTotals } = UseTotalContext();

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
        const consumption = {foodDrinkHeavyMeatEaterSpending, foodDrinkMediumMeatEaterSpending, foodDrinkLightMeatEaterSpending,
            foodDrinkVegetarianSpending, foodDrinkVeganSpending, pharmaceuticalsSpending, clothesShoesSpending, 
            paperProductsSpending, computersITEquipmentSpending, motorVehiclesExFuelSpending, furnitureSpending, 
            hotelsRestuarantsSpending, cellPhonesSpending, bankingFinanceSpending, insuranceSpending, educationSpending, 
            recreationalAndCultureSpending, countryIsoCode}
        setTotals({...totals, consumption})
        axios
            .post('https://api.sustain.life/v1/personal-calculator/consumption',
             {consumption},

              { headers: {
              'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795",
              'content-type': 'application/json'
             }})
            .then(res => {
                console.log(res.data.totalConsumptionEmissionsCO2e)
                alert(`Your total consumption emissions are: ${res.data.totalConsumptionEmissionsCO2e}`)
            })
            .catch(err => {
                console.log(err)
            })
      };

    return (
        <> 
        <div class="container">
            <br></br>
            <h4>Add your consumption emissions below</h4>
            <h5>Spending for each category in USD</h5>
            <br></br>
            <div class="row">
              <div class="col-sm">
              <InputGroup className="mb-3">
                  <DropdownButton
                  variant="outline-warning"
                  title="Heavy Meat Diet"
                  id="input-group-dropdown-1"
              >
                      <Form.Control autoFocus value={foodDrinkHeavyMeatEaterSpending} onChange={(e)=>setFoodDrinkHeavyMeatEaterSpending(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                  </DropdownButton>
              </InputGroup>
              </div>

              <div class="col-sm">
              <InputGroup className="mb-3">
                  <DropdownButton
                  variant="outline-warning"
                  title="Medium Meat Diet"
                  id="input-group-dropdown-1"
              >
                      <Form.Control onChange={(e)=>setFoodDrinkMediumMeatEaterSpending(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                  </DropdownButton>
              </InputGroup>
              </div>

              <div class="col-sm">
                <InputGroup className="mb-3  ">
                    <DropdownButton
                    variant="outline-warning"
                    title="Light meat Diet"
                    id="input-group-dropdown-1"
                    //onSelect={(e)=>setCarId(e)}
                >
                        <Form.Control onChange={(e)=>setFoodDrinkLightMeatEaterSpending(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                    </DropdownButton>
                </InputGroup>
            </div>

            <div class="col-sm">
                <InputGroup className="mb-3  ">
                    <DropdownButton
                    variant="outline-warning"
                    title="Vegetarian Diet"
                    id="input-group-dropdown-1"
                    //onSelect={(e)=>setCarId(e)}
                >
                        <Form.Control onChange={(e)=>setFoodDrinkVegetarianSpending(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                    </DropdownButton>
                </InputGroup>
            </div>
            </div>

            <div className='row'>

           
            <div class="col-sm">
            <InputGroup className="mb-3">
                <DropdownButton
                variant="outline-warning"
                title="Vegan Diet"
                id="input-group-dropdown-1"
                //onSelect={(e)=>setClientId(e)}
            >
                    <Form.Control onChange={(e)=>setFoodDrinkVeganSpending(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                </DropdownButton>
            </InputGroup>
            </div>

            <div class="col-sm">
            <InputGroup className="mb-3">
                <DropdownButton
                variant="outline-warning"
                title="Pharmaceutical"
                id="input-group-dropdown-1"
                //onSelect={(e)=>setClientId(e)}
            >
                    <Form.Control onChange={(e)=>setPharmaceuticalsSpending(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                </DropdownButton>
            </InputGroup>
            </div>

            <div class="col-sm">
            <InputGroup className="mb-3">
                <DropdownButton
                variant="outline-warning"
                title="Clothes & Shoes"
                id="input-group-dropdown-1"
                //onSelect={(e)=>setClientId(e)}
            >
                    <Form.Control onChange={(e)=>setClothesShoesSpending(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                </DropdownButton>
            </InputGroup>
            </div>

            <div class="col-sm">
            <InputGroup className="mb-3">
                <DropdownButton
                variant="outline-warning"
                title="Paper products"
                id="input-group-dropdown-1"
                //onSelect={(e)=>setClientId(e)}
            >
                    <Form.Control onChange={(e)=>setPaperProductsSpending(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                </DropdownButton>
            </InputGroup>
            </div>
            </div>

            <div className='row'>

              <div class="col-sm">
              <InputGroup className="mb-3">
                  <DropdownButton
                  variant="outline-warning"
                  title="Computers & IT"
                  id="input-group-dropdown-1"
                  //onSelect={(e)=>setClientId(e)}
              >
                      <Form.Control onChange={(e)=>setComputersITEquipmentSpending(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                  </DropdownButton>
              </InputGroup>
              </div>

              <div class="col-sm">
              <InputGroup className="mb-3">
                  <DropdownButton
                  variant="outline-warning"
                  title="Fuel"
                  id="input-group-dropdown-1"
                  //onSelect={(e)=>setClientId(e)}
              >
                      <Form.Control onChange={(e)=>setMotorVehiclesExFuelSpending(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                  </DropdownButton>
              </InputGroup>
              </div>

              <div class="col-sm">
              <InputGroup className="mb-3">
                  <DropdownButton
                  variant="outline-warning"
                  title="Furniture"
                  id="input-group-dropdown-1"
                  //onSelect={(e)=>setClientId(e)}
              >
                      <Form.Control onChange={(e)=>setFurnitureSpending(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                  </DropdownButton>
              </InputGroup>
              </div>

              <div class="col-sm">
              <InputGroup className="mb-3">
                  <DropdownButton
                  variant="outline-warning"
                  title="Hotels & Restuarant"
                  id="input-group-dropdown-1"
                  //onSelect={(e)=>setClientId(e)}
              >
                      <Form.Control onChange={(e)=>setHotelsRestuarantsSpending(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                  </DropdownButton>
              </InputGroup>
              </div>
            </div>

            <div className='row'>
              <div class="col-sm">
                <InputGroup className="mb-3">
                    <DropdownButton
                    variant="outline-warning"
                    title="Phone"
                    id="input-group-dropdown-1"
                    //onSelect={(e)=>setClientId(e)}
                >
                        <Form.Control onChange={(e)=>setCellPhonesSpending(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                    </DropdownButton>
                </InputGroup>
              </div>

              <div class="col-sm">
                <InputGroup className="mb-3">
                    <DropdownButton
                    variant="outline-warning"
                    title="Banking & Finance"
                    id="input-group-dropdown-1"
                    //onSelect={(e)=>setClientId(e)}
                >
                        <Form.Control onChange={(e)=>setBankingFinanceSpending(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                    </DropdownButton>
                </InputGroup>
              </div>

              <div class="col-sm">
                <InputGroup className="mb-3">
                    <DropdownButton
                    variant="outline-warning"
                    title="Insurance"
                    id="input-group-dropdown-1"
                    //onSelect={(e)=>setClientId(e)}
                >
                        <Form.Control onChange={(e)=>setInsuranceSpending(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                    </DropdownButton>
                </InputGroup>
              </div>

              <div class="col-sm">
                <InputGroup className="mb-3">
                    <DropdownButton
                    variant="outline-warning"
                    title="Education"
                    id="input-group-dropdown-1"
                    //onSelect={(e)=>setClientId(e)}
                >
                        <Form.Control onChange={(e)=>setEducationSpending(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
                    </DropdownButton>
                </InputGroup>
              </div>
            </div>

            <div className='row'>

            <div class="col-sm">
                <InputGroup className="mb-3">
                    <DropdownButton
                    variant="outline-warning"
                    title="Recreation & Culture"
                    id="input-group-dropdown-1"
                    //onSelect={(e)=>setClientId(e)}
                >
                        <Form.Control onChange={(e)=>setRecreationalAndCultureSpending(e.target.value)} aria-label="Text input with dropdown button" defaultValue="1" />
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

export default AddConsumptionEmissions;