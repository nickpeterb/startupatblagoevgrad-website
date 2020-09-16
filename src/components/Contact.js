import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import './styles/Contact.css';

const contactText = {
    "title": {
        "en": "Contact",
        "bg": "Контакт"
    },
    "name": {
        "en": "Name",
        "bg": "Име"
    },
    "company": {
        "en": "Company",
        "bg": "Компания"
    },
    "message": {
        "en": "Message",
        "bg": "Съобщение"
    },
    "askus": {
        "en": "Ask us anything...",
        "bg": "Задайте въпрос..."
    },
    "send": {
        "en": "SEND",
        "bg": "Изпрати"
    },
}

export default function Contact(props) {

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
                        <h2 style={{ color: "white", paddingBottom: "0.5em" }}>{contactText.title[props.lang]}</h2>
                        <Form noValidate validated={validated} onSubmit={handleSubmit} id="contact-us-form">
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
                                            placeholder={contactText.name[props.lang] + "*"}
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
                                            placeholder={contactText.company[props.lang]}
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                             
                            {/*<Form.Row>
                                <Form.Group as={Col} md="9" controlId="validationReason">
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend" style={{ backgroundColor: "white", border:"none"}}>
                                                <i className="fa fa-question" aria-hidden="true" style={{ fontSize: "1.4em", marginRight:"5px" }}></i>
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control as="select" name="reason_for_inquiry" defaultValue={'Reason for inquiry'} style={{border:"none"}}>
                                            <option value="Reason for inquiry" disabled>Reason for inquiry</option>
                                            <option value="I have a question about your events">I have a question about your events</option>
                                            <option value="I want to become a speaker">I want to become a speaker</option>
                                            <option value="I want to become a sponsor">I want to become a sponsor</option>
                                            <option value="Other">Other</option>
                                        </Form.Control>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>*/}
                            
                            <Form.Row>
                                <Form.Group as={Col}  md="11" controlId="validationMessage">
                                    <Form.Label><b style={{ color: "white"}}>{contactText.message[props.lang]}*</b></Form.Label>
                                    <Form.Control required as="textarea" type="text" name="message" placeholder={contactText.askus[props.lang]} style={{ height: "8em", border:"none" }}  />
                                </Form.Group>
                            </Form.Row>
                            
                            <input type="submit" value={contactText.send[props.lang]} className="submitButton"></input>

                        </Form>

                    </Col>

                    <Col className="map-wrapper text-center align-self-center" > 
                        <iframe
                            title="map"
                            className="map"
                            frameBorder="0"
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDFjUIu9J4dcGhpfNADgVvshkY9uK8v8H4&q=American+University+in+Bulgaria,Blagoevgrad+Bulgaria">
                        </iframe>
                    </Col>
                </Row>

            </Container>
        </div>
        </>
    );
}