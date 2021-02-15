import React from "react";
import Bootstrap from "bootstrap";
import { Form } from 'react-bootstrap';

export default function CreateMessage(props) {
  return (
    <Form class="container-md">
    <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label>FROM:</Form.Label>
      <Form.Control placeholder="name@example.com" />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Label>TO:</Form.Label>
      <Form.Control as="select">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>Write a New Message</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
  </Form>
)};