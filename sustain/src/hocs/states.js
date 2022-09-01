import React, {useEffect, useState, createContext, useContext} from 'react';

export const TotalsContext = createContext();

export const TotalsProvider = ({ children }) => {
    const [countryIsoCode, setCountryIsoCode] = useState('usa');
    const [calculationComponents, setCalculationComponents] = useState({});
    const [carCalculationComponents, setCarCalculationComponents] = useState({});
    const [flightCalculationComponents, setFlightCalculationComponents] = useState({});
    const [total, setTotal] = useState(0);
    const [carTotal, setCatTotal] = useState(0);


    const addCalculationComponent = (component) => {
        setCalculationComponents({...calculationComponents, component});
    }
    const addCarCalculationComponent = (component) => {
        setCarCalculationComponents({...carCalculationComponents, component});
    }
    const addFlightCalculationComponent = (component) => {
        setFlightCalculationComponents({...flightCalculationComponents, component});
    }
    const getAllCalculationComponen = () => {
        return {...calculationComponents, ...carCalculationComponents, ...flightCalculationComponents};
    }
    const addTotal = (emissions) => {
        setTotal(total + emissions);
    }
    const addcarTotal = (emissions) => {
        setCatTotal(carTotal + emissions);
        setTotal(total + emissions);
        
    }

return (
    <TotalsContext.Provider value = {{ 
        total,
        addTotal, 
        countryIsoCode, 
        setCountryIsoCode, 
        carTotal,
        addcarTotal,
        addCalculationComponent,
        addCarCalculationComponent,
        addFlightCalculationComponent,
        getAllCalculationComponen}}>
    {children}
    </TotalsContext.Provider>
    )
}

export const UseTotalContext = () => {
    return useContext(TotalsContext);
  }