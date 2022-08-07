import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Emissions.css';
import React, { useEffect, useState } from 'react';

function AddHouseEmissions() {
  const[total, setTotal]= useState("")

  return (
    <>
    <div class="container">
      <h4>Add your household emissions below</h4>
    <div class="row">
      <div class="col-sm">
      <InputGroup className="mb-3  ">
        <DropdownButton
          variant="outline-secondary"
          title="Recyle Metal"
          id="input-group-dropdown-1"
          
        >
          <Dropdown.Item href="#">True</Dropdown.Item>
          <Dropdown.Item href="#">False</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
      </div>

      <div class="col-sm">
      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title="Recyle Plastic"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">True</Dropdown.Item>
          <Dropdown.Item href="#">False</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
      </div>

      <div class="col-sm">
      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title="Recyle Glass"
          id="input-group-dropdown-1">
          <Dropdown.Item href="#">True</Dropdown.Item>
          <Dropdown.Item href="#">False</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
      </div>
      </div>

      <div class="row">
      <div class="col-sm">
      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title="Recyle Glass"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">True</Dropdown.Item>
          <Dropdown.Item href="#">False</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
      </div>

      <div class="col-sm">
      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title="Recyle Magazines"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">True</Dropdown.Item>
          <Dropdown.Item href="#">False</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
      </div>

      <div class="col-sm">
      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title="Number of People"
          id="input-group-dropdown-1"
        >
           <Form.Control aria-label="Text input with dropdown button" />
        </DropdownButton>
      </InputGroup>
      </div>
      </div>

      <div class="row">
      <InputGroup className="mb-3 text-center">
        <DropdownButton
          variant="outline-secondary"
          title="Country Iso Code"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">True</Dropdown.Item>
          <Dropdown.Item href="#">False</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
      </div>
      </div>
    </>
  );
}

export default AddHouseEmissions;