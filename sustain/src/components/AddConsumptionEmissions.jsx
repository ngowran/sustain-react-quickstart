import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
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
    
    const { addConsumptionCalculationComponent, countryIsoCode, addConsumptionTotal } = UseTotalContext();

    const handleClick=(e)=>{
        const consumption = {foodDrinkHeavyMeatEaterSpending, foodDrinkMediumMeatEaterSpending, foodDrinkLightMeatEaterSpending,
            foodDrinkVegetarianSpending, foodDrinkVeganSpending, pharmaceuticalsSpending, clothesShoesSpending, 
            paperProductsSpending, computersITEquipmentSpending, motorVehiclesExFuelSpending, furnitureSpending, 
            hotelsRestuarantsSpending, cellPhonesSpending, bankingFinanceSpending, insuranceSpending, educationSpending, 
            recreationalAndCultureSpending, countryIsoCode};
        addConsumptionCalculationComponent(consumption);
        axios
            .post('https://api.sustain.life/community/v1/personal-calculator/consumption',
             consumption,

              { headers: {
              'Ocp-Apim-Subscription-Key': "5da167febbdf4b04aaea80025aff37cc",
              'content-type': 'application/json'
             }})
            .then(res => {
                setEmissionsValue(res.data.totalConsumptionEmissionsCO2e);
                addConsumptionTotal(res.data.totalConsumptionEmissionsCO2e);
            })
            .catch(err => {
                console.log(err)
        })
    };

    
  
    return (
        <> 
            <div class="container text-center" style={{width: '1000px', padding:'5px'}}>
            <br></br>
            <h4 className="text-warning">Calculate your consumption emissions below.</h4>
            <h6 className="text-warning">You can add how much you spend on each of the following categories.</h6>
            <br></br>
            <table className='m-auto'>          
                <tr className='row'>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <p>Amount spent on heavy meat diet?</p>
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                    <input
                        className='w-100'
                        type="number"
                        value={foodDrinkHeavyMeatEaterSpending}
                        onChange={event => {
                            setFoodDrinkHeavyMeatEaterSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>  
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <p>Amount spent on medium meat diet?</p>
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                    <input
                        className='w-100'
                        type="number"
                        value={foodDrinkMediumMeatEaterSpending}
                        onChange={event => {
                            setFoodDrinkMediumMeatEaterSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <p>Amount spent on light meat diet?</p>
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                    <input
                        className='w-100'
                        type="number"
                        value={foodDrinkLightMeatEaterSpending}
                        onChange={event => {
                            setFoodDrinkLightMeatEaterSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <p>Amount spent on vegetarian diet?</p>
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                    <input
                        className='w-100'
                        type="number"
                        value={foodDrinkVegetarianSpending}
                        onChange={event => {
                            setFoodDrinkVegetarianSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <p>Amount spent on vegan diet?</p>
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                    <input
                        className='w-100'
                        type="number"
                        value={foodDrinkVeganSpending}
                        onChange={event => {
                            setFoodDrinkVeganSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <p>Amount spent on pharmaceuticals?</p>
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                    <input
                        className='w-100'
                        type="number"
                        value={pharmaceuticalsSpending}
                        onChange={event => {
                            setPharmaceuticalsSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <p>Amount spent on clothes & shoes?</p>
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                    <input
                        className='w-100'
                        type="number"
                        value={clothesShoesSpending}
                        onChange={event => {
                            setClothesShoesSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <p>Amount spent on paper products?</p>
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                    <input
                        className='w-100'
                        type="number"
                        value={paperProductsSpending}
                        onChange={event => {
                            setPaperProductsSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <p>USD</p>
                    </td>
                </tr>
                <tr className='row'>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <p>Amount spent on computers & IT?</p>
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                    <input
                        className='w-100'
                        type="number"
                        value={computersITEquipmentSpending}
                        onChange={event => {
                            setComputersITEquipmentSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <p>Amount spent on motor vehicles, excluding fuel?</p>
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                    <input
                        className='w-100'
                        type="number"
                        value={motorVehiclesExFuelSpending}
                        onChange={event => {
                            setMotorVehiclesExFuelSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <p>Amount spent on furniture?</p>
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                    <input
                        className='w-100'
                        type="number"
                        value={furnitureSpending}
                        onChange={event => {
                            setFurnitureSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <p>Amount spent on hotels & restuarants?</p>
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                    <input
                        className='w-100'
                        type="number"
                        value={hotelsRestuarantsSpending}
                        onChange={event => {
                            setHotelsRestuarantsSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <p>Amount spent on cellphones or mobile phones?</p>
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                    <input
                        className='w-100'
                        type="number"
                        value={cellPhonesSpending}
                        onChange={event => {
                            setCellPhonesSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <p>Amount spent on banking & finance?</p>
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                    <input
                        className='w-100'
                        type="number"
                        value={bankingFinanceSpending}
                        onChange={event => {
                            setBankingFinanceSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <p>Amount spent on insurance?</p>
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                    <input
                        className='w-100'
                        type="number"
                        value={insuranceSpending}
                        onChange={event => {
                            setInsuranceSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <p>Amount spent on education?</p>
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                    <input
                        className='w-100'
                        type="number"
                        value={educationSpending}
                        onChange={event => {
                            setEducationSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <p>Amount spent on recreation & culture?</p>
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                    <input
                        className='w-100'
                        type="number"
                        value={recreationalAndCultureSpending}
                        onChange={event => {
                            setRecreationalAndCultureSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <span>USD</span>
                    </td>
                </tr>

                <br></br>
                <tr className='row'>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        <Button variant="warning" style={{width: '200px'}} type="submit" onClick={handleClick}>
                            Set Emissions
                        </Button>
                    </td>
                    <td style={{width: '300px', textAlign: 'left'}}>
                        {/* {emissionsValue.toFixed(2)} MT C02e */}
                    </td>
                </tr>
            </table>                    
    </div>
    </>
  );

}

export default AddConsumptionEmissions;