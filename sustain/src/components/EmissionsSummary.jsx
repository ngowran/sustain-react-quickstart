import 'bootstrap/dist/css/bootstrap.min.css';
import './Emissions.css';
import React from 'react';
import { UseTotalContext } from '../hocs/states';

function EmissionsSummary() {
 
    const { total, carTotal, householdTotal, consumptionTotal, flightTotal } = UseTotalContext();
  
    return (
        <> 
        <div class="container text-center">
            <br></br>
            <h4 className='text-warning'>Summary of total emissions</h4>
            <br></br>
            
            <table className='text-center m-auto'>            
                <tr >
                    <td colSpan="24">
                        <span>Your total</span>
                    </td>
                    <td colSpan="24"> MT C02e  </td>
                </tr>
                <tr >
                    <td colSpan="48">
                        <hr/>
                    </td>
                </tr>
                <tr>
                    <td colSpan="24">
                        <span>Car</span>
                    </td>
                    <td colSpan="24">
                        <span>{carTotal.toFixed(2)}</span>
                    </td>
                </tr>
                <tr>
                    <td colSpan="24">
                        <span>Household</span>
                    </td>
                    <td colSpan="24">
                        <span>{householdTotal.toFixed(2)}</span>
                    </td>
                </tr>
                <tr>
                    <td colSpan="24">
                        <span>Consumption</span>
                    </td>
                    <td colSpan="24">
                        <span>{consumptionTotal.toFixed(2)}</span>
                    </td>
                </tr>
                <tr>
                    <td colSpan="24">
                        <span>Flights</span>
                    </td>
                    <td colSpan="24">
                        <span>{flightTotal.toFixed(2)}</span>
                    </td>
                </tr>
                <tr>
                    <td colSpan="48">
                        <hr/>
                    </td>
                </tr>
                <tr>
                    <td colSpan="24">
                        <span>Total</span>
                    </td>
                    <td colSpan="24">
                        <span>{total.toFixed(2)}</span>
                    </td>
                </tr>
            </table>         
        </div>
    </>
  );

}

export default EmissionsSummary;