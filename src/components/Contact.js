import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import './styles/Contact.css';

export default function Contact() {

    const [show, setShow] = useState(false);
    const handleClose = () => {
        document.getElementById("contact-us-form").reset();
        setValidated(false);
        setShow(false);
    }

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        }
        if(form.checkValidity() === true) {
            setShow(true);
        }
    };

    return (
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Thanks for contacting us!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                We'll get back to you as soon as possible.
            </Modal.Body>
        </Modal>

        <div className="contact" style={{ backgroundColor: "#2cb3ab", padding: "3em 0 3em 0" }}>
            <Container>
                <Row>
                    <Col lg>
                        <h2 style={{ color: "white", paddingBottom: "0.5em" }}>Contact Us</h2>
                        <Form noValidate validated={validated} onSubmit={handleSubmit} id="contact-us-form">
                            <Form.Row>
                                <Form.Group as={Col} md="9" controlId="validationName" >
                                    <InputGroup >
                                        <InputGroup.Prepend >
                                            <InputGroup.Text id="inputGroupPrepend" style={{ backgroundColor: "white", border:"none" }}>
                                                <i className="fa fa-user" aria-hidden="true" style={{ fontSize: "1.4em" }}></i>
                                            </InputGroup.Text>
                                        </InputGroup.Prepend >
                                        <Form.Control style={{border:"none"}}
                                            required
                                            type="text"
                                            name="full_name"
                                            id="full_name"
                                            placeholder="Name*"
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            
                            <Form.Row>
                                <Form.Group as={Col} md="9" controlId="validationCompany" >
                                    <InputGroup >
                                        <InputGroup.Prepend >
                                            <InputGroup.Text id="inputGroupPrepend" style={{ backgroundColor: "white", border:"none" }}>
                                                <i className="fa fa-building" style={{ fontSize: "1.4em" }}></i>
                                            </InputGroup.Text>
                                        </InputGroup.Prepend >
                                        <Form.Control style={{border:"none"}}
                                            type="text"
                                            name="company"
                                            placeholder="Company"
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} md="9" controlId="validationEmail">
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend" style={{ backgroundColor: "white", border:"none" }}>
                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control style={{border:"none"}}
                                            type="email"
                                            placeholder="Email*"
                                            name="email"
                                            required
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                             
                            <Form.Row>
                                <Form.Group as={Col} md="9" controlId="validationReason">
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend" style={{ backgroundColor: "white", border:"none"}}>
                                                <i className="fa fa-question" aria-hidden="true" style={{ fontSize: "1.4em", marginRight:"5px" }}></i>
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control as="select" name="reason_for_inquiry" style={{border:"none"}}>
                                            <option value="" disabled selected>Reason for inquiry</option>
                                            <option value="I have a question about your events">I have a question about your events</option>
                                            <option value="I want to become a speaker">I want to become a speaker</option>
                                            <option value="I want to become a sponsor">I want to become a sponsor</option>
                                            <option value="Nove of the above">Nove of the above</option>
                                        </Form.Control>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            
                            <Form.Row>
                                <Form.Group as={Col}  md="11" controlId="validationMessage">
                                    <Form.Label><b style={{ color: "white"}}>Message*</b></Form.Label>
                                    <Form.Control required as="textarea" type="text" name="message" placeholder="Ask us anything..." style={{ height: "8em", border:"none" }}  />
                                </Form.Group>
                            </Form.Row>
                            
                            <input type="submit" value="SEND" className="submitButton"></input>

                        </Form>

                    </Col>

                    <Col className="map-wrapper text-center align-self-center" > 
                        <iframe
                            title="map"
                            className="map"
                            frameBorder="0"
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDFjUIu9J4dcGhpfNADgVvshkY9uK8v8H4&q=American+University+in+Bulgaria,Blagoevgrad+Bulgaria" allowFullScreen>
                        </iframe>
                    </Col>
                </Row>

            </Container>
        </div>
        </>
    );
}