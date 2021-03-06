import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { Row, Col, Image } from "react-bootstrap";

import { OverlayTrigger, Popover } from "react-bootstrap";

export default function MessageListItem(props) {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">
        <Col>
          <Image src={props.senderAvatar} height="60" width="60" />
          <Row>
            {props.senderName}, {props.senderAge}, {props.senderLocation}
          </Row>
        </Col>
      </Popover.Title>
      <Popover.Content>
        <Col>
          <Image
            id="badge"
            src="/badge-01.png"
            height="25"
            width="25"
            alt="25x25"
          />
        </Col>
        {/* {props.senderName}, {props.senderAge}, {props.senderLocation} */}
      </Popover.Content>
    </Popover>
  );

  return (
    <Accordion>
      <Card class="messageCard" bg="teal">
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <Row>
            <Col>
              <OverlayTrigger trigger="hover" placement="top" overlay={popover}>
                <Row>
                  FROM: {props.senderName}, {props.senderAge},{" "}
                  {props.senderLocation}
                </Row>
              </OverlayTrigger>
              <Row>DATE: {props.dateReceived}</Row>
            </Col>
            <Col>
              <Image
                id="avatar"
                src={props.animalAvatar}
                height="60"
                width="60"
                alt="60x60"
              />
            </Col>
          </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body class="collapseBody">{props.message}</Card.Body>
        </Accordion.Collapse>

        <Image
          id="trash"
          src="/trash-01.png"
          height="25"
          width="25"
          alt="25*25"
          onClick={() => props.deleteMessage(props.id)}
        />
      </Card>
    </Accordion>
  );
}
