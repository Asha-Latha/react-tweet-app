import React, { useState } from 'react';

import { Navbar, Form, Button } from 'react-bootstrap';
import { UncontrolledCollapse, Card, CardBody } from 'reactstrap';

import axios from 'axios';

import '../App.css';

const Reply = () => (
  <div>
    <div>
      <a href="#toggler" id="toggler">View All Comments</a>
      <UncontrolledCollapse toggler="#toggler">
        <div>
          <span class="font-weight-bold">username </span>
          <span class="text-break">
            comment are more the bigger than this cards comment are more bigger than this cards comment are
            more bigger than this cards comment are more bigger than this cards comment are more bigger than
            this cards
                    </span>
        </div>
      </UncontrolledCollapse>
    </div>
  </div>
);




export default Reply;