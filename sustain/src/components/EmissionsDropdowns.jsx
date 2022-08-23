import Accordion from 'react-bootstrap/Accordion';
import AddCarEmissions from './AddCarEmissions';
import AddHouseEmissions from './AddHouseEmissions';
import AddConsumptionEmissions from './AddConsumptionEmissions';
import AddFlightEmissions from './AddFlightEmissions';
import AddUtilityEmissions from './AddUtilityEmissions';
import AddTotalEmissions from './AddTotalEmissions';
import './Emissions.css';

function EmissionsDropdown() {
  return (
    <div >
    <Accordion>
      <Accordion.Item eventKey="0"  className='dropdown'>
        <Accordion.Header>Car Emissions</Accordion.Header>
        <Accordion.Body>
         <AddCarEmissions />
        </Accordion.Body>

      </Accordion.Item>
      <Accordion.Item eventKey="1"  className='dropdown'>
        <Accordion.Header>Household Emissions</Accordion.Header>
        <Accordion.Body>
          <AddHouseEmissions />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2"  className='dropdown'>
        <Accordion.Header>Consumption Emissions</Accordion.Header>
        <Accordion.Body>
          <AddConsumptionEmissions />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3"  className='dropdown'>
        <Accordion.Header>Flight Emissions</Accordion.Header>
        <Accordion.Body>
          <AddFlightEmissions />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4"  className='dropdown'>
        <Accordion.Header>Utlity Emissions</Accordion.Header>
        <Accordion.Body>
          <AddUtilityEmissions />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5"  className='dropdown'>
        <Accordion.Header>Total Emissions</Accordion.Header>
        <Accordion.Body>
          <AddTotalEmissions />
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
    </div>
  );
}

export default EmissionsDropdown;