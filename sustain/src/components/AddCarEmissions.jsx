
import 'bootstrap/dist/css/bootstrap.min.css';
import './Emissions.css';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { UseTotalContext } from '../hocs/states';

function AddCarEmissions() {
    const[carId, setCarId]= useState(0) ;
    const[totalDistance, setTotalDistance]= useState(0) ;
    const[distanceUnit, setDistanceUnit]= useState('');
    const[distanceUnits, setDistanceUnits]=useState([]);
    const[carModels, setCarModels]=useState([]);
    const[emissionsValue, setEmissionsValue]=useState(0);

    const { addCarCalculationComponent, countryIsoCode, addCarTotal } = UseTotalContext();

    useEffect(() => {
       if(distanceUnits.length === 0)
            fetchDistanceUnits();
        if(carModels.length === 0)
            fetchCarModels();
    }, []);
    
    function fetchDistanceUnits() {
        axios
        .get('https://api.sustain.life/community/v1/reference/distance-units',
          { headers: {
          'Ocp-Apim-Subscription-Key': "5da167febbdf4b04aaea80025aff37cc",
            'content-type': 'application/json'
          
        }})
        .then(res => {
          setDistanceUnits(res.data.items)
        })
        .catch(err => {
            console.log(err)
        })
    }; 
     
    function fetchCarModels() {
        axios
        .get('https://api.sustain.life/community/v1/reference/cars',
            { headers: {
            'Ocp-Apim-Subscription-Key': "5da167febbdf4b04aaea80025aff37cc",
            'content-type': 'application/json'            
        }})
        .then(res => {
            setCarModels(res.data.items)
        })
        .catch(err => {
            console.log(err)
        })
    };

    function handleClick () {
        const clientId = carId;
        const totalDistanceUnit = distanceUnit || 'Miles';
        const car = {carId, clientId, totalDistance, totalDistanceUnit, countryIsoCode};
        addCarCalculationComponent(car);
        axios
            .post('https://api.sustain.life/community/v1/personal-calculator/car',
            car,
          { headers: {
          'Ocp-Apim-Subscription-Key': "5da167febbdf4b04aaea80025aff37cc",
          'content-type': 'application/json'
         }})
            
        .then(res => {
            setEmissionsValue(res.data.totalCarEmssionsCO2e);
            addCarTotal(res.data.totalCarEmssionsCO2e);
        })
        .catch(err => {
            console.log(err)
        })
    };

    const handleDistanceUnitChange = (e) => {
        setDistanceUnit(e.target.value);
    }
    const handleCarModelChange = (e) => {
        setCarId(e.target.value);
    }
  
    return (
        <>  
        <div class="container text-center" style={{width: '1000px', padding:'5px'}}>
        <h4 className='text-warning'>Calculate your car trip emissions below. You can add as many trips as you would like.</h4>
        <br></br>
        <table className='m-auto'>
            <tr className='row'>
                <td style={{width: '300px', textAlign: 'left'}}>
                    <span>Distance travelled</span>
                </td>
                <td style={{width: '300px', textAlign: 'left'}}>
                    <input
                        className='w-100'
                        type="number"
                        value={totalDistance}
                        onChange={event => {
                            setTotalDistance(+(event.target.value)); 
                        }}
                        />                    
                </td>
                <td style={{width: '300px', textAlign: 'left'}}>
                    <select onChange={(e)=>handleDistanceUnitChange(e)}>
                        <option value=""> Select an option</option>
                        {distanceUnits.map((unit) => <option key={unit} value={unit}>{unit}</option>)}
                    </select>
                </td>
            </tr>
            <br></br>
            <tr className='row'>
                <td style={{width: '300px', textAlign: 'left'}}>
                    <span>Make & Model</span>
                </td>
                <td style={{width: '300px', textAlign: 'left'}}>
                    <select onChange={(e)=>handleCarModelChange(e)} >
                        <option value=""> Select an option</option>
                        {carModels.map((car) => <option key={car.id} value={car.id}>{car.year} {car.make} {car.model}</option>)}
                    </select>                 
                </td>
            </tr>
            
            <br></br>               
            <tr className='row'>
                <td style={{width: '300px', textAlign: 'left'}}>
                    <Button variant="warning" style={{width: '200px'}} type="submit" onClick={handleClick}>
                        Add trip
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
 

export default AddCarEmissions;