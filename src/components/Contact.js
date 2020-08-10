import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './styles/Contact.css';

export default function Contact() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className="contact" style={{ backgroundColor: "#2cb3ab", padding: "3em 0 3em 0" }}>
            <Container>
                <Row>
                    <Col lg>
                        <h2 style={{ color: "white", paddingBottom: "0.5em" }}>Contact Us</h2>
                        <Form noValidate validated={validated} onSubmit={handleSubmit} >
                            <Form.Row>
                                <Form.Group as={Col} md="9" controlId="validationName">
                                    <InputGroup>
                                        <InputGroup.Prepend >
                                            <InputGroup.Text id="inputGroupPrepend" style={{ backgroundColor: "white" }}>
                                                <i className="fa fa-user" aria-hidden="true" style={{ fontSize: "1.4em" }}></i>
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Name or Company*"
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} md="9" controlId="validationEmail">
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend" style={{ backgroundColor: "white" }}>
                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="text"
                                            placeholder="Email*"
                                            required
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} md="9" controlId="validationReason">
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend" style={{ backgroundColor: "white" }}>
                                                <i className="fa fa-question" aria-hidden="true" style={{ fontSize: "1.4em", marginRight:"5px" }}></i>
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control as="select">
                                            <option>Reason for inquiry</option>
                                            <option>I have a question about your events</option>
                                            <option>I want to become a speaker</option>
                                            <option>I want to become a sponsor</option>
                                        </Form.Control>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="validationMessage">
                                    <Form.Label><b style={{ color: "white" }}>Message</b></Form.Label>
                                    <Form.Control required as="textarea" style={{ height: "6em" }} />
                                </Form.Group>
                            </Form.Row>

                            <Button type="submit" style={{ border: "none", backgroundColor: "white", color: "#2cb3ab" }}><b>SEND</b></Button>

                        </Form>

                    </Col>

                    <Col className="text-center">

                        <iframe
                            title="map"
                            className="map"
                            frameBorder="0"
                            style={{ border: "0", width: '100%', maxWidth:"50vh", height: '50vh', marginTop: "1em" }}
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDFjUIu9J4dcGhpfNADgVvshkY9uK8v8H4
    &q=American+University+in+Bulgaria,Blagoevgrad+Bulgaria" allowFullScreen>
                        </iframe>

                    </Col>
                </Row>

            </Container>
        </div>
    );
}