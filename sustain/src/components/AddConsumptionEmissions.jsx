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
    
    const { addCalculationComponent, countryIsoCode, addConsumptionTotal } = UseTotalContext();

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
                addConsumptionTotal(res.data.totalConsumptionEmissionsCO2e);
            })
            .catch(err => {
                console.log(err)
        })
    };

    
  
    return (
        <> 
        <div>
            <br></br>
            <h4 className="text-warning">Calculate your consumption emissions below. You can add how much you spend on each of the following categories.</h4>
            <br></br>
            <table className='m-auto'>          
                <tr className='row'>
                    <td className='col-md-8'>
                        <p>Amount spent on heavy meat diet?</p>
                    </td>
                    <td className='col-md-2'>
                    <input
                        className='w-100'
                        type="number"
                        value={foodDrinkHeavyMeatEaterSpending}
                        onChange={event => {
                            setFoodDrinkHeavyMeatEaterSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td className='col-md-2'>  
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td className='col-md-8'>
                        <p>Amount spent on medium meat diet?</p>
                    </td>
                    <td className='col-md-2'>
                    <input
                        className='w-100'
                        type="number"
                        value={foodDrinkMediumMeatEaterSpending}
                        onChange={event => {
                            setFoodDrinkMediumMeatEaterSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td className='col-md-2'>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td className='col-md-8'>
                        <p>Amount spent on light meat diet?</p>
                    </td>
                    <td className='col-md-2'>
                    <input
                        className='w-100'
                        type="number"
                        value={foodDrinkLightMeatEaterSpending}
                        onChange={event => {
                            setFoodDrinkLightMeatEaterSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td className='col-md-2'>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td className='col-md-8'>
                        <p>Amount spent on vegetarian diet?</p>
                    </td>
                    <td className='col-md-2'>
                    <input
                        className='w-100'
                        type="number"
                        value={foodDrinkVegetarianSpending}
                        onChange={event => {
                            setFoodDrinkVegetarianSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td className='col-md-2'>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td className='col-md-8'>
                        <p>Amount spent on vegan diet?</p>
                    </td>
                    <td className='col-md-2'>
                    <input
                        className='w-100'
                        type="number"
                        value={foodDrinkVeganSpending}
                        onChange={event => {
                            setFoodDrinkVeganSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td className='col-md-2'>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td className='col-md-8'>
                        <p>Amount spent on pharmaceuticals?</p>
                    </td>
                    <td className='col-md-2'>
                    <input
                        className='w-100'
                        type="number"
                        value={pharmaceuticalsSpending}
                        onChange={event => {
                            setPharmaceuticalsSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td className='col-md-2'>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td className='col-md-8'>
                        <p>Amount spent on clothes & shoes?</p>
                    </td>
                    <td className='col-md-2'>
                    <input
                        className='w-100'
                        type="number"
                        value={clothesShoesSpending}
                        onChange={event => {
                            setClothesShoesSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td className='col-md-2'>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td className='col-md-8'>
                        <p>Amount spent on paper products?</p>
                    </td>
                    <td className='col-md-2'>
                    <input
                        className='w-100'
                        type="number"
                        value={paperProductsSpending}
                        onChange={event => {
                            setPaperProductsSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td className='col-md-2'>
                        <p>USD</p>
                    </td>
                </tr>
                <tr className='row'>
                    <td className='col-md-8'>
                        <p>Amount spent on computers & IT?</p>
                    </td>
                    <td className='col-md-2'>
                    <input
                        className='w-100'
                        type="number"
                        value={computersITEquipmentSpending}
                        onChange={event => {
                            setComputersITEquipmentSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td className='col-md-2'>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td className='col-md-8'>
                        <p>Amount spent on motor vehicles, excluding fuel?</p>
                    </td>
                    <td className='col-md-2'>
                    <input
                        className='w-100'
                        type="number"
                        value={motorVehiclesExFuelSpending}
                        onChange={event => {
                            setMotorVehiclesExFuelSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td className='col-md-2'>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td className='col-md-8'>
                        <p>Amount spent on furniture?</p>
                    </td>
                    <td className='col-md-2'>
                    <input
                        className='w-100'
                        type="number"
                        value={furnitureSpending}
                        onChange={event => {
                            setFurnitureSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td className='col-md-2'>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td className='col-md-8'>
                        <p>Amount spent on hotels & restuarants?</p>
                    </td>
                    <td className='col-md-2'>
                    <input
                        className='w-100'
                        type="number"
                        value={hotelsRestuarantsSpending}
                        onChange={event => {
                            setHotelsRestuarantsSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td className='col-md-2'>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td className='col-md-8'>
                        <p>Amount spent on cellphones or mobile phones?</p>
                    </td>
                    <td className='col-md-2'>
                    <input
                        className='w-100'
                        type="number"
                        value={cellPhonesSpending}
                        onChange={event => {
                            setCellPhonesSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td className='col-md-2'>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td className='col-md-8'>
                        <p>Amount spent on banking & finance?</p>
                    </td>
                    <td className='col-md-2'>
                    <input
                        className='w-100'
                        type="number"
                        value={bankingFinanceSpending}
                        onChange={event => {
                            setBankingFinanceSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td className='col-md-2'>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td className='col-md-8'>
                        <p>Amount spent on insurance?</p>
                    </td>
                    <td className='col-md-2'>
                    <input
                        className='w-100'
                        type="number"
                        value={insuranceSpending}
                        onChange={event => {
                            setInsuranceSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td className='col-md-2'>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td className='col-md-8'>
                        <p>Amount spent on education?</p>
                    </td>
                    <td className='col-md-2'>
                    <input
                        className='w-100'
                        type="number"
                        value={educationSpending}
                        onChange={event => {
                            setEducationSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td className='col-md-2'>
                        <span>USD</span>
                    </td>
                </tr>
                <tr className='row'>
                    <td className='col-md-8'>
                        <p>Amount spent on recreation & culture?</p>
                    </td>
                    <td className='col-md-2'>
                    <input
                        className='w-100'
                        type="number"
                        value={recreationalAndCultureSpending}
                        onChange={event => {
                            setRecreationalAndCultureSpending(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td className='col-md-2'>
                        <span>USD</span>
                    </td>
                </tr>

                <br></br>
                <tr className='row'>
                    <td className='col-md-3'>
                        <Button variant="warning" style={{width: '100px'}} type="submit" onClick={handleClick}>
                            Submit
                        </Button>
                    </td>
                    <td className='col-md-9'>
                        {emissionsValue.toFixed(2)} MT C02e
                    </td>
                </tr>
            </table>                    
    </div>
    </>
  );

}

export default AddConsumptionEmissions;