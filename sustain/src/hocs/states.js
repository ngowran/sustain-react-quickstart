import React, {useState, createContext, useContext} from 'react';

export const TotalsContext = createContext();

export const TotalsProvider = ({ children }) => {
    const [countryIsoCode, setCountryIsoCode] = useState('usa');
    const [calculationComponents, setCalculationComponents] = useState({});
    const [carCalculationComponents, setCarCalculationComponents] = useState({});
    const [flightCalculationComponents, setFlightCalculationComponents] = useState({});
    const [total, setTotal] = useState(0);
    const [carTotal, setCarTotal] = useState(0);
    const [householdTotal, setHouseholdTotal] = useState(0);
    const [consumptionTotal, setConsumptionTotal] = useState(0);
    const [flightTotal, setFlightTotal] = useState(0);
    const [utilityTotal, setUtilityTotal] = useState(0);
    
    const addCalculationComponent = (component) => {
        setCalculationComponents({...calculationComponents, component});
    }
    const addFlightCalculationComponent = (component) => {
        setFlightCalculationComponents({...flightCalculationComponents, component});
    }
    const addCarCalculationComponent = (component) => {
        setCarCalculationComponents({...carCalculationComponents, component});
    }
    const addHouseholdEmissionTotal = (component) => {
        setCalculationComponents({...calculationComponents, component});
    }
    const getAllCalculationComponen = () => {
        return {...calculationComponents, ...carCalculationComponents, ...flightCalculationComponents};
    }
    const addTotal = (emissions) => {
        setTotal(total + emissions);
    }
    const addCarTotal = (emissions) => {
        setCarTotal(carTotal + emissions);
        setTotal(total + emissions);        
    }
    const addHouseholdTotal = (emissions) => {
        setHouseholdTotal(householdTotal + emissions);
        setTotal(total + emissions);        
    }
    const addConsumptionTotal = (emissions) => {
        setConsumptionTotal(consumptionTotal + emissions);
        setTotal(total + emissions);        
    }
    const addFlightTotal = (emissions) => {
        setFlightTotal(flightTotal + emissions);
        setTotal(total + emissions);        
    }
    const addUtilityTotal = (emissions) => {
        setUtilityTotal(utilityTotal + emissions);
        setTotal(total + emissions);        
    }

return (
    <TotalsContext.Provider value = {{ 
        total,
        addTotal, 
        countryIsoCode, 
        setCountryIsoCode, 
        carTotal,
        householdTotal,
        consumptionTotal,
        flightTotal,
        utilityTotal, 
        addCarTotal,
        addHouseholdTotal,
        addConsumptionTotal,
        addFlightTotal,
        addUtilityTotal,
        addCalculationComponent,
        addHouseholdEmissionTotal,
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