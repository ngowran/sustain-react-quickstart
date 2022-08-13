import Accordion from 'react-bootstrap/Accordion';
import AddCarEmissions from './AddCarEmissions';
import AddHouseEmissions from './AddHouseEmissions';

function FlushExample() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
         <AddCarEmissions />
        </Accordion.Body>

      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          <AddHouseEmissions />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FlushExample;