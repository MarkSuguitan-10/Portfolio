import React from 'react'
import { Link } from 'react-router-dom';
import {Container, Row, Col, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const index = () => {
    console.log('Contact');
    return (
        <div>
            <Link to='/Contact'></Link>
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <Form>
                            <Row>
                                <Col md>
                                    <Form.Group controlId="formName">
                                    <Form.Label  className="Name-label">Name</Form.Label>
                                    <Form.Control type="Name" placeholder="Name"></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md>
                                    <Form.Group controlId="formEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Example.gmail.com"></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md>
                                    <Form.Group controlId="formSubject">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text" placeholder="What do you want to talk about?"></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md>
                                    <Form.Group controlId="formMessage">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="text" placeholder="Message"></Form.Control>
                                    </Form.Group> 
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default index
