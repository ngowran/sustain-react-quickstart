import React, {useEffect, useState, createContext, useContext} from 'react';

export const TotalsContext = createContext();

export const TotalsProvider = ({ children }) => {
    const [totals, setTotals] = useState({});


    const addTotal = (total) => {
        setTotals({...totals, total})
    }

return (
    <TotalsContext.Provider value = {{totals, addTotal, setTotals}}>
    {children}
    </TotalsContext.Provider>
    )
}

export const UseTotalContext = () => {
    return useContext(TotalsContext);
  }