import axios from "axios";
import { useState, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Row, Col, Image } from "react-bootstrap";


export default function MessageListItem(props) {

  console.log("PROPS >>> ", props)

  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <Row>
            <Col>
              <Row>
              FROM: {props.senderName}, {props.senderAge}, {props.senderLocation}
              </Row>
              <Row>
              DATE: {props.dateReceived}
              </Row>
            </Col>
            <Col>
              <Image id="avatar"
              src="/kids-avatar-001.png"
                // src="{props.animalAvatar}"
              />
            </Col>
          </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{props.message}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
} 
