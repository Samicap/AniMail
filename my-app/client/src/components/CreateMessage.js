import React from "react";
import Bootstrap from "bootstrap";
import { Form, Button, Row, Col, Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function CreateMessage({ childId }) {
//!on submit will need to call multiple functions.  one needs to call on the badges to update thec count of messaged a child has.
import Popup from "./popup/Popup";

export default function CreateMessage({ childId }) {
  const [formData, setFormData] = useState({
    child_id_to: "",
    animal_id: "1",
    text: "",
  });

  let history = useHistory();

  const [messageData, setMessageData] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [userId, setUserId] = useState(window.localStorage.getItem("childId"));
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    axios.get(`/api/profiles/child/${userId}`).then((response) => {
      console.log("child profile ", response.data.childs[0]);
      const profile = response.data.childs[0];
      setUserProfile(profile);
    });
  }, []);

  useEffect(() => {
    if (childId) {
      setUserId(childId);
      window.localStorage.setItem("childId", childId);
    } else {
      setUserId(window.localStorage.getItem("childId"));
    }
  }, [childId]);

  const validateForm = () => {
    console.log("child_id_to ", formData.child_id_to);
    console.log("formData.text.length ", formData.text.length);
    if (
      !formData.child_id_to ||
      formData.child_id_to === "Pick a contact" ||
      !formData.text
    ) {
      console.log("form validation FALSE");
      return false;
    } else {
      console.log("form validation TRUE");
      return true;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //! calls funciton to add Badge to DB
    sendMessage(formData);

    if (!validateForm()) {
      setShowPopup(true);
      console.log("inside validation form if ");
    } else {
      sendMessage(formData);
    }
  };

  // :id needs to be changed after we have the login form
  const sendMessage = (formData) => {
    axios
      .post(`/api/messages/children/${userId}`, {
        child_id_to: formData.child_id_to,
        message: formData.text,
        animal_id: formData.animal_id,
      })
      .then(function (response) {
        const data = response.data.message[0];

        setMessageData(data);
        history.push("/message/sent");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //! Routes in children file
  const getRandomPenPal = () => {
    axios
      .get(`/api/children/${userId}`)
      .then(function (response) {
        // console.log("array childs ", response.data.childs);
        // console.log("length ", response.data.childs.length);
        const length = response.data.childs.length;
        const randomId = Math.floor(Math.random() * length);
        // console.log("randomId ", randomId);
        setFormData({
          ...formData,
          child_id_to: response.data.childs[randomId].id,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const addBadgeToChildProfile = (
    userId,
    messageArray,
    childAlreadyHasBadges
  ) => {
    childAlreadyHasBadges.map((badge) => {
      const badgeId = badge.id;
      //! look at last elemnt in the array and if the state has 1 item add 2
      //! 
      if (messageArray.length === 3) {
        axios
          .post(`/api/badges/child/${userId}/child_badges`, { badgeId: 3 })
          .then((response) => {});
      }
    });
    // check how many messages a child has sent
    // if (messageArray.length === 2) {
    //   axios.post(`/api/badges/child/${userId}/child_badges`, {badgeId: 2}).then((response) => {
    //   })
    // }
    // if (messageArray.length === 1) {
    //   axios.post(`/api/badges/child/${userId}/child_badges`, {badgeId: 1}).then((response) => {
    //   })
    } //! there is a missing } somewhere in this code
  };

  const togglePopup = () => {
    console.log("inside togglePopup func");
    if (showPopup === true) {
      setShowPopup(false);
    } else setShowPopup(true);
  };


  return (
    <>
      <h1>Compose A New Message</h1>
      {userProfile && (
        <p>
          FROM: {userProfile.username}, {userProfile.age},{" "}
          {userProfile.location}
        </p>
      )}

      {showPopup && (
        <Popup
          text="Please fill out all the fields in the form"
          closePopup={togglePopup}
        />
      )}

      {!showPopup && (
        <Form onSubmit={submitHandler}>
          <Form.Group as={Row} controlId="selectPenPal.ControlSelect">
            <Row>
              <Form.Label column sm={2}>
                To:
              </Form.Label>
              <Col>
                <Form.Control
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
                <Button variant="primary" onClick={getRandomPenPal}>
                  Find a new pen pal!
                </Button>{" "}
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
                <option value="7">Phoenix</option>
                <option value="8">Unicorn</option>
                <option value="9">Dragon</option>
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
      )}
      <h3>Character counter: {formData.text.length}</h3>
    </>
  );
}
