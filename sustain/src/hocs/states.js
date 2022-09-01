import React, {useEffect, useState, createContext, useContext} from 'react';

export const TotalsContext = createContext();

export const TotalsProvider = ({ children }) => {
    const [totals, setTotals] = useState({});
    const [countryIsoCode, setCountryIsoCode] = useState('usa');


    const addTotal = (total) => {
        setTotals({...totals, total})
    }

return (
    <TotalsContext.Provider value = {{totals, addTotal, setTotals, countryIsoCode, setCountryIsoCode}}>
    {children}
    </TotalsContext.Provider>
    )
}

export const UseTotalContext = () => {
    return useContext(TotalsContext);
  }