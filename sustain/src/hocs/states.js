import React, {useState, createContext, useContext} from 'react';

export const TotalsContext = createContext();

export const TotalsProvider = ({ children }) => {
    const [countryIsoCode, setCountryIsoCode] = useState('usa');
    const [carCalculationComponents, setCarCalculationComponents] = useState([]);
    const [flightCalculationComponents, setFlightCalculationComponents] = useState([]);
    const [railCalculationComponent, setRailCalculationComponent] = useState({});
    const [busCalculationComponent, setBusCalculationComponent] = useState({});
    const [householdCalculationComponent, setHouseholdCalculationComponent] = useState({});
    const [consumptionCalculationComponent, setConsumptionCalculationComponent] = useState({});
    const [utilityCalculationComponent, setUtilityCalculationComponent] = useState({});
    const [total, setTotal] = useState(0);
    const [carTotal, setCarTotal] = useState(0);
    const [householdTotal, setHouseholdTotal] = useState(0);
    const [consumptionTotal, setConsumptionTotal] = useState(0);
    const [flightTotal, setFlightTotal] = useState(0);
    const [utilityTotal, setUtilityTotal] = useState(0);
    const [busTotal, setBusTotal] = useState(0);
    const [railTotal, setRailTotal] = useState(0);
    
    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    const getAllCalculationComponent = () => {
        let request = {'countryIsoCode': countryIsoCode};
        if (carCalculationComponents.length > 0) request = {...request, 'cars': carCalculationComponents};
        if (flightCalculationComponents.length > 0) request = {...request, 'flights': flightCalculationComponents};
        if(!isEmpty(busCalculationComponent)) request = {...request, 'bus': busCalculationComponent};
        if(!isEmpty(railCalculationComponent)) request = {...request, 'rail': railCalculationComponent};
        if(!isEmpty(utilityCalculationComponent)) request = {...request, 'utilities': utilityCalculationComponent};
        if(!isEmpty(householdCalculationComponent)) request = {...request, 'householdWaste': householdCalculationComponent};
        if(!isEmpty(consumptionCalculationComponent)) request = {...request, 'consumption': consumptionCalculationComponent};
        return request;
    }

    const addFlightCalculationComponent = (component) => {
        let newCollection = [...flightCalculationComponents, component];
        setFlightCalculationComponents(newCollection);
    }
    const addCarCalculationComponent = (component) => {
        let newCollection = [...carCalculationComponents, component];
        setCarCalculationComponents(newCollection);
    }
    const addRailCalculationComponent = (component) => {
        setRailCalculationComponent(component);
    }
    const addBusCalculationComponent = (component) => {
        setBusCalculationComponent(component);
    } 
    const addHouseholdCalculationComponent = (component) => {
        setHouseholdCalculationComponent(component);
    } 
    const addConsumptionCalculationComponent = (component) => {
        setConsumptionCalculationComponent(component);
    } 
    const addUtilityCalculationComponent = (component) => {
        setUtilityCalculationComponent(component);
    }  

    const setEmissionTotal = (emissions) => {
        setTotal(total + emissions);
    }
    const addCarTotal = (emissions) => {
        setCarTotal(carTotal + emissions);
        setTotal(total + emissions);        
    }
    const addHouseholdTotal = (emissions) => {
        const old = householdTotal;
        setHouseholdTotal(householdTotal + emissions);
        setTotal(total + emissions - old);        
    }
    const addConsumptionTotal = (emissions) => {
        const old = consumptionTotal;
        setConsumptionTotal(consumptionTotal + emissions);
        setTotal(total + emissions - old);        
    }
    const addFlightTotal = (emissions) => {
        setFlightTotal(flightTotal + emissions);
        setTotal(total + emissions);        
    }
    const addUtilityTotal = (emissions) => {
        const old = utilityTotal;
        setUtilityTotal(utilityTotal + emissions);
        setTotal(total + emissions - old);        
    }
    const addBusTotal = (emissions) => {
        const old = busTotal;
        setBusTotal(emissions);
        setTotal(total + emissions - old);        
    }
    const addRailTotal = (emissions) => {
        const old = railTotal;
        setRailTotal(emissions);
        setTotal(total + emissions - old);        
    }
    
return (
    <TotalsContext.Provider value = {{ 
        total,
        setEmissionTotal, 
        countryIsoCode, 
        setCountryIsoCode, 
        carTotal,
        householdTotal,
        consumptionTotal,
        flightTotal,
        utilityTotal, 
        busTotal,
        railTotal,
        addCarTotal,
        addHouseholdTotal,
        addConsumptionTotal,
        addFlightTotal,
        addUtilityTotal,
        addBusTotal,
        addRailTotal,
        addCarCalculationComponent,
        addFlightCalculationComponent,
        addBusCalculationComponent,
        addRailCalculationComponent,
        addHouseholdCalculationComponent,
        addConsumptionCalculationComponent,
        addUtilityCalculationComponent,
        getAllCalculationComponent}}>
    {children}
    </TotalsContext.Provider>
    )
}

export const UseTotalContext = () => {
    return useContext(TotalsContext);
  }