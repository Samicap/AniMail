import React from "react";
import Bootstrap from "bootstrap";
import { Form, Button, Row, Col, Dropdown } from 'react-bootstrap';

export default function CreateMessage(props) {
  return (
    <Form>
      <h1>Compose A New Message</h1>
    <Form.Group as={Row} controlId="formPlaintextFrom">
      <Form.Label column sm="2">
        From:
      </Form.Label>
      <Col sm="10">
        <Form.Control plaintext readOnly defaultValue="Current child's name, age, location" />
      </Col>
    </Form.Group>
    <Form.Group as={Row} controlId="selectPenPal.ControlSelect">
      <Form.Label column sm={2}>To:</Form.Label>
      <Col sm={10}>
        <Form.Control as="select">
          <option>Find a new pen pal!</option>
          <option>Ana, 8, Montreal</option>
          <option>Naz, 8, Istanbul</option>
          <option>Sam, 8, Phoenix</option>
          <option>Thomas, 8, Toronto</option>
        </Form.Control>
      </Col>
    </Form.Group>
    <Form.Group as={Row} controlId="selectAnimal.ControlSelect">
      <Form.Label column sm={2}>Delivery Animal:</Form.Label>
      <Col sm={10}>
        <Form.Control as="select">
          <option>Zebra</option>
          <option>Llama</option>
          <option>Owl</option>
          <option>Dove</option>
          <option>Shark</option>
          <option>Octopus</option>
        </Form.Control>
      </Col>
    </Form.Group>
    <Form.Group as={Row} controlId="createMessage.ControlTextarea">
      <Form.Label column sm={2}>Your Message:</Form.Label>
      <Col sm={10}>
        <Form.Control as="textarea" rows={10} />
      </Col>
    </Form.Group>
    <Button variant="primary">Send Message</Button>{' '}
  </Form>
)};