
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
    const[countries, setCountries]=useState([]);
    const[country, setCountry]=useState();
    const[distanceUnits, setDistanceUnits]=useState([]);
    const[carModels, setCarModels]=useState([]);
    const[emissionsValue, setEmissionsValue]=useState(0);

    const { totals, setTotals } = UseTotalContext();

    function fetchCountries() {
        axios
        .get('https://api.sustain.life/v1/reference/countries',
          { headers: {
          'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795"
        }})
        .then(res => {
            const locations = res.data.items;
            const sortedLocations = locations.sort(function(a, b){
                if(a.isoCode === 'usa') { return -1; }
                if(a.firstname > b.firstname) { return 1; }
                return 0;
            })
            
            setCountries(sortedLocations);
        })
        .catch(err => {
            console.log(err)
        })  
    };

    useEffect(() => {
        if(countries.length === 0)
            fetchCountries();
        if(distanceUnits.length === 0)
            fetchDistanceUnits();
        if(carModels.length === 0)
            fetchCarModels();
    }, []);
    
    function fetchDistanceUnits() {
        axios
        .get('https://api.sustain.life/v1/reference/distance-units',
          { headers: {
          'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795",
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
        .get('https://api.sustain.life/v1/reference/cars',
            { headers: {
            'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795",
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
        const countryIsoCode = country || 'usa';
        const clientId = carId;
        const totalDistanceUnit = distanceUnit || 'Miles';
        const car = {carId, clientId, totalDistance, totalDistanceUnit, countryIsoCode}
        setTotals({...totals, car})
        axios
            .post('https://api.sustain.life/v1/personal-calculator/car',
            car,
            { headers: {
                'Ocp-Apim-Subscription-Key': "00c112e599ff4c85bad0cfdacd3bb795",
                'content-type': 'application/json'
                }
            }
        )
        .then(res => {
            setEmissionsValue(res.data.totalCarEmssionsCO2e);
        })
        .catch(err => {
            console.log(err)
        })
    };

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    }
    const handleDistanceUnitChange = (e) => {
        setDistanceUnit(e.target.value);
    }
    const handleCarModelChange = (e) => {
        setCarId(e.target.value);
    }
  
    return (
        <>  
        <div class="container">
            <br></br>
            <h4>Calculate your car trip emissions below</h4>
            <br></br>
            <table>
                <tr>
                    <td>
                        <span>Country of Residence</span>
                    </td>
                    <td>
                        <select onChange={(e)=>handleCountryChange(e)} value={country}>
                            {countries.map((country) => <option key={country.isoCode} value={country.isoCode}>{country.name}</option>)}
                        </select>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <span>Distance travelled</span>
                    </td>
                    <td>
                    <input
                        type="number"
                        value={totalDistance}
                        onChange={event => {
                            setTotalDistance(+(event.target.value)); 
                        }}
                        />                    
                    </td>
                    <td>
                        <select onChange={(e)=>handleDistanceUnitChange(e)}>
                            {distanceUnits.map((unit) => <option key={unit} value={unit}>{unit}</option>)}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>Make & Model</span>
                    </td>
                    <td>
                        <select onChange={(e)=>handleCarModelChange(e)} >
                            {carModels.map((car) => <option key={car.id} value={car.id}>{car.year} {car.make} {car.model}</option>)}
                        </select>                 
                    </td>
                    <td> </td>
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
 

export default AddCarEmissions;