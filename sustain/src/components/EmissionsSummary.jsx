import 'bootstrap/dist/css/bootstrap.min.css';
import './Emissions.css';
import React from 'react';
import { UseTotalContext } from '../hocs/states';

function EmissionsSummary() {
 
    const { total, carTotal } = UseTotalContext();
  
    return (
        <> 
        <div class="container">
            <br></br>
            <h4>Add your consumption emissions below</h4>
            <h5>Spending for each category in USD</h5>
            <br></br>
            <table width="600">            
                <tr>
                    <td>
                        <span>Your total</span>
                    </td>
                    <td> MT C02e  </td>
                </tr>
                <tr>
                    <td colSpan="3">
                        <hr/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>Car</span>
                    </td>
                    <td>
                        <span>{carTotal}</span>
                    </td>
                </tr>
                <tr>
                    <td colSpan="3">
                        <hr/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>Total</span>
                    </td>
                    <td>
                        <span>{total}</span>
                    </td>
                </tr>
            </table>         
        </div>
    </>
  );

}

export default EmissionsSummary;