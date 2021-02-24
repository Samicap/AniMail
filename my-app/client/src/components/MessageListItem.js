import axios from "axios";
import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { Row, Col, Image } from "react-bootstrap";

import { OverlayTrigger, Popover, Button } from 'react-bootstrap';



export default function MessageListItem(props) {

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">
        <Image
          src={props.senderAvatar}
          height="60"
          width="60"
        />
        {/* {props.senderName}, {props.senderAge}, {props.senderLocation} */}
      </Popover.Title>
      <Popover.Content>
        {/* BADGES */}
        {props.senderName}, {props.senderAge}, {props.senderLocation}
      </Popover.Content>
    </Popover>
  );

  //! deletes messages from db, but doesn't remove the message from the page without manually refreshing the page.
  const deleteMessage = (messageId) => {
    axios.delete(`/api/messages/${messageId}`).then(response => {
      console.log("DELETE MESSAGE ", response)
    })
  } 


  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <Row>  
              <Col> 
                <OverlayTrigger trigger="hover" placement="top" overlay={popover}>
                    <Row>
                      FROM: {props.senderName}, {props.senderAge}, {props.senderLocation}
                    </Row>
                </OverlayTrigger>
                  <Row>
                    DATE: {props.dateReceived}
                  </Row>
              </Col>
              <Col>
                <Row>
                  <Image id="avatar"
                    src={props.animalAvatar}
                    height="60"
                    width="60"
                    alt="60x60"
                  />
                </Row>
              </Col>
              <Col>
               
              </Col> 
          </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{props.message}</Card.Body>
        </Accordion.Collapse>
   
          <Image id="trash"
                      src="/trash-01.png"
                      height="25"
                      width="25"
                      alt="25*25"
                      onClick={()=> deleteMessage(props.id)}
                    />
        
      </Card>
    </Accordion>
  );
}
