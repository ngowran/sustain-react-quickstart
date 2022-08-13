import Accordion from 'react-bootstrap/Accordion';
import AddCarEmissions from './AddCarEmissions';
import AddHouseEmissions from './AddHouseEmissions';
import './Emissions.css';

function EmissionsDropdown() {
  return (
    <div >
    <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="0"  style={{ backgroundColor: '#00181c', color: 'white', border: "none", minWidth: "75vw"}}>
        <Accordion.Header>Car Emissions</Accordion.Header>
        <Accordion.Body>
         <AddCarEmissions />
        </Accordion.Body>

      </Accordion.Item>
      <Accordion.Item eventKey="1"   style={{ backgroundColor: '#00181c', color: 'white', border: "none", minWidth: "75vw"}}>
        <Accordion.Header>Household Emissions</Accordion.Header>
        <Accordion.Body>
          <AddHouseEmissions />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" style={{ backgroundColor: '#00181c', color: 'white', border: "none", minWidth: "75vw"}}>
        <Accordion.Header>Household Emissions</Accordion.Header>
        <Accordion.Body>
          <AddHouseEmissions />
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
    </div>
  );
}

export default EmissionsDropdown;