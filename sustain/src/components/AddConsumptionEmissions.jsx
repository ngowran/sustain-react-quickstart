import 'bootstrap/dist/css/bootstrap.min.css';
import './Emissions.css';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { UseTotalContext } from '../hocs/states';

function AddConsumptionEmissions() {
    const[foodDrinkHeavyMeatEaterSpending, setFoodDrinkHeavyMeatEaterSpending]= useState(0);
    const[foodDrinkMediumMeatEaterSpending, setFoodDrinkMediumMeatEaterSpending]= useState(0);
    const[foodDrinkLightMeatEaterSpending, setFoodDrinkLightMeatEaterSpending]= useState(0) ;
    const[foodDrinkVegetarianSpending, setFoodDrinkVegetarianSpending]= useState(0) ;
    const[foodDrinkVeganSpending, setFoodDrinkVeganSpending]= useState(0);
    const[pharmaceuticalsSpending, setPharmaceuticalsSpending]= useState(0);
    const[clothesShoesSpending, setClothesShoesSpending]= useState(0);
    const[paperProductsSpending, setPaperProductsSpending]= useState(0);
    const[computersITEquipmentSpending, setComputersITEquipmentSpending]= useState(0);
    const[motorVehiclesExFuelSpending, setMotorVehiclesExFuelSpending]= useState(0);
    const[furnitureSpending, setFurnitureSpending]= useState(0);
    const[hotelsRestuarantsSpending, setHotelsRestuarantsSpending]= useState(0);
    const[cellPhonesSpending, setCellPhonesSpending]= useState(0);
    const[bankingFinanceSpending, setBankingFinanceSpending]= useState(0);
    const[insuranceSpending, setInsuranceSpending]= useState(0);
    const[educationSpending, setEducationSpending]= useState(0);
    const[recreationalAndCultureSpending, setRecreationalAndCultureSpending]= useState(0);
    const[emissionsValue, setEmissionsValue]=useState(0);
    
    const { addCalculationComponent, countryIsoCode } = UseTotalContext();

    const handleClick=(e)=>{
        const consumption = {foodDrinkHeavyMeatEaterSpending, foodDrinkMediumMeatEaterSpending, foodDrinkLightMeatEaterSpending,
            foodDrinkVegetarianSpending, foodDrinkVeganSpending, pharmaceuticalsSpending, clothesShoesSpending, 
            paperProductsSpending, computersITEquipmentSpending, motorVehiclesExFuelSpending, furnitureSpending, 
            hotelsRestuarantsSpending, cellPhonesSpending, bankingFinanceSpending, insuranceSpending, educationSpending, 
            recreationalAndCultureSpending, countryIsoCode};
        addCalculationComponent(consumption);
        axios
            .post('https://api.sustain.life/v1/personal-calculator/consumption',
             consumption,

              { headers: {
              'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795",
              'content-type': 'application/json'
             }})
            .then(res => {
                setEmissionsValue(res.data.totalConsumptionEmissionsCO2e);
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
            <table>            
                <tr>
                    <td>
                        <span>Heavy Meat Diet</span>
                    </td>
                    <td>
                    <input
                        type="number"
                        value={foodDrinkHeavyMeatEaterSpending}
                        onChange={event => {
                            setFoodDrinkHeavyMeatEaterSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td>  </td>
                </tr>
                <tr>
                    <td>
                        <span>Medium Meat Diet</span>
                    </td>
                    <td>
                    <input
                        type="number"
                        value={foodDrinkMediumMeatEaterSpending}
                        onChange={event => {
                            setFoodDrinkMediumMeatEaterSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td>
                        <span>USD</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>Light Meat Diet</span>
                    </td>
                    <td>
                    <input
                        type="number"
                        value={foodDrinkLightMeatEaterSpending}
                        onChange={event => {
                            setFoodDrinkLightMeatEaterSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td>
                        <span>USD</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>Vegetarian Diet</span>
                    </td>
                    <td>
                    <input
                        type="number"
                        value={foodDrinkVegetarianSpending}
                        onChange={event => {
                            setFoodDrinkVegetarianSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td>
                        <span>USD</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>Vegan Diet</span>
                    </td>
                    <td>
                    <input
                        type="number"
                        value={foodDrinkVeganSpending}
                        onChange={event => {
                            setFoodDrinkVeganSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td>
                        <span>USD</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>Pharmaceutical</span>
                    </td>
                    <td>
                    <input
                        type="number"
                        value={pharmaceuticalsSpending}
                        onChange={event => {
                            setPharmaceuticalsSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td>
                        <span>USD</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>Clothes & Shoes</span>
                    </td>
                    <td>
                    <input
                        type="number"
                        value={clothesShoesSpending}
                        onChange={event => {
                            setClothesShoesSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td>
                        <span>USD</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>Paper products</span>
                    </td>
                    <td>
                    <input
                        type="number"
                        value={paperProductsSpending}
                        onChange={event => {
                            setPaperProductsSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td>
                        <span>USD</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>Computers & IT</span>
                    </td>
                    <td>
                    <input
                        type="number"
                        value={computersITEquipmentSpending}
                        onChange={event => {
                            setComputersITEquipmentSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td>
                        <span>USD</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>Motor Vehicles, excluding Fuel</span>
                    </td>
                    <td>
                    <input
                        type="number"
                        value={motorVehiclesExFuelSpending}
                        onChange={event => {
                            setMotorVehiclesExFuelSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td>
                        <span>USD</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>Furniture</span>
                    </td>
                    <td>
                    <input
                        type="number"
                        value={furnitureSpending}
                        onChange={event => {
                            setFurnitureSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td>
                        <span>USD</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>Hotels & Restuarant</span>
                    </td>
                    <td>
                    <input
                        type="number"
                        value={hotelsRestuarantsSpending}
                        onChange={event => {
                            setHotelsRestuarantsSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td>
                        <span>USD</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>Cellphone</span>
                    </td>
                    <td>
                    <input
                        type="number"
                        value={cellPhonesSpending}
                        onChange={event => {
                            setCellPhonesSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td>
                        <span>USD</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>Banking & Finance</span>
                    </td>
                    <td>
                    <input
                        type="number"
                        value={bankingFinanceSpending}
                        onChange={event => {
                            setBankingFinanceSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td>
                        <span>USD</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>Insurance</span>
                    </td>
                    <td>
                    <input
                        type="number"
                        value={insuranceSpending}
                        onChange={event => {
                            setInsuranceSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td>
                        <span>USD</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>Education</span>
                    </td>
                    <td>
                    <input
                        type="number"
                        value={educationSpending}
                        onChange={event => {
                            setEducationSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td>
                        <span>USD</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>Recreation & Culture</span>
                    </td>
                    <td>
                    <input
                        type="number"
                        value={recreationalAndCultureSpending}
                        onChange={event => {
                            setRecreationalAndCultureSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td>
                        <span>USD</span>
                    </td>
                </tr>
            </table>                    
        <div className='row'>
            <div className='row'>
                <Button variant="warning" style={{width: '100px'}} type="submit" onClick={handleClick}>
                    Submit
                </Button>
            </div>
            <div className='row'>
                {emissionsValue} MT C02e
            </div>
        </div>
    </div>
    </>
  );

}

export default AddConsumptionEmissions;