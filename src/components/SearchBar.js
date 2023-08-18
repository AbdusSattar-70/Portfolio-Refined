import React, { useState, forwardRef } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import PropTypes from 'prop-types';
import { FaMagnifyingGlass } from 'react-icons/fa6';

// CustomToggle component to display selected role
const CustomToggle = forwardRef(({ selectedRole, onClick }, ref) => (
  <Form.Control
    ref={ref}
    onClick={(e) => {
      onClick(e);
    }}
    value={selectedRole}
    readOnly
  />
));

// Add displayName to CustomToggle component
CustomToggle.displayName = 'CustomToggle';

// Prop types for CustomToggle
CustomToggle.propTypes = {
  selectedRole: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const SearchBar = () => {
  const [selectedRole, setSelectedRole] = useState('Select url to see about me');

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleSearch = () => {
    if (selectedRole === 'http://human.main.database.com/sattar?role=software_engineer/') {
      window.location.href = '/about';
    } else if (selectedRole === 'http://human.main.database.com/sattar?role=human/') {
      window.location.href = '/about';
    }
  };

  return (
    <Navbar className="bg-body-tertiary justify-content-between">
      <Form inline className="w-100">
        {' '}
        {/* Make the form full-width */}
        <InputGroup className="w-100">
          {' '}
          {/* Make the input group full-width */}
          <InputGroup.Text id="basic-addon1">GET</InputGroup.Text>
          <Dropdown onSelect={handleRoleSelect}>
            <Dropdown.Toggle as={CustomToggle} selectedRole={selectedRole} />
            <Dropdown.Menu>
              <Dropdown.Item eventKey="http://human.main.database.com/sattar?role=software_engineer/">http://human.main.database.com/sattar?role=software_engineer/</Dropdown.Item>
              <Dropdown.Item eventKey="http://human.main.database.com/sattar?role=human/">http://human.main.database.com/sattar?role=human/</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </InputGroup>
      </Form>
      <Form inline>
        <Button type="button" onClick={handleSearch}>
          <FaMagnifyingGlass />
        </Button>
      </Form>
    </Navbar>
  );
};

export default SearchBar;
