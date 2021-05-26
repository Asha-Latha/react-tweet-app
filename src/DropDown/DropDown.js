import React, { useState } from 'react';

import { Navbar, Form, Button, DropdownButton } from 'react-bootstrap';
import { UncontrolledCollapse, Card, CardBody, ListGroup } from 'reactstrap';

import axios from 'axios';

import '../App.css';

const DropDown = () => (
  <div>
    <div>
      <a href="#toggler" id="toggler">.</a>
      <UncontrolledCollapse toggler="#toggler">
        <div>
          <Card style={{ width: '8rem' }}>
            {/* <ListGroup variant="flush"> */}
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </Card>
        </div>
      </UncontrolledCollapse>
    </div>
  </div>
);
export default DropDown;