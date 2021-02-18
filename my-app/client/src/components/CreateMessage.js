import React from "react";
import Bootstrap from "bootstrap";
import { Form, Button, Row, Col, Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function CreateMessage({ childId }) {
  const [formData, setFormData] = useState({
    child_id_to: "",
    animal_id: "",
    text: "",
  });

  const [messageData, setMessageData] = useState(null);

  let history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    //console.log(formData);
    sendMessage(formData);
  };

  // :id needs to be changed after we have the login form
  const sendMessage = (formData) => {
    axios
      .post(`/api/messages/children/${childId}`, {
        child_id_to: formData.child_id_to,
        message: formData.text,
        animal_id: formData.animal_id,
      })
      .then(function (response) {
        //console.log(response.data.message[0]);
        const data = response.data.message[0];

        setMessageData(data);
        history.push("/sent");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => console.log(messageData), [messageData]);

  return (
    <Form onSubmit={submitHandler}>
      <h1>Compose A New Message</h1>
      <Form.Group as={Row} controlId="formPlaintextFrom">
        <Form.Label column sm="2">
          From:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            plaintext
            readOnly
            defaultValue="Current child's name, age, location"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="selectPenPal.ControlSelect">
        <Row>
          <Form.Label column sm={2}>
            To:
          </Form.Label>
          <Col>
            <Form.Control
              value={-1}
              as="select"
              value={formData.child_id_to}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  child_id_to: event.target.value,
                })
              }
            >
              <option placeholder="Pick a contact">Pick a contact</option>
              <option value="4">Ana, 8, Montreal</option>
              <option value="1">Naz, 8, Istanbul</option>
              <option value="2">Sam, 8, Phoenix</option>
              <option value="3">Thomas, 8, Toronto</option>
            </Form.Control>
          </Col>
          <Col> or </Col>
          <Col>
            <Button variant="primary">Find a new pen pal!</Button>{" "}
          </Col>
        </Row>
      </Form.Group>
      <Form.Group as={Row} controlId="selectAnimal.ControlSelect">
        <Form.Label column sm={2}>
          Delivery Animal:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            as="select"
            value={formData.animal_id}
            onChange={(event) =>
              setFormData({
                ...formData,
                animal_id: event.target.value,
              })
            }
          >
            <option value="1">Zebra</option>
            <option value="2">Llama</option>
            <option value="3">Owl</option>
            <option value="4">Dove</option>
            <option value="5">Shark</option>
            <option value="6">Octopus</option>
          </Form.Control>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="createMessage.ControlTextarea">
        <Form.Label column sm={2}>
          Your Message:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            as="textarea"
            rows={10}
            value={formData.text}
            onChange={(event) =>
              setFormData({
                ...formData,
                text: event.target.value,
              })
            }
          />
        </Col>
      </Form.Group>
      {/* <Button variant="primary">Send Message</Button>{" "} */}
      <input type="submit" value="Send Message" />
    </Form>
  );
}
