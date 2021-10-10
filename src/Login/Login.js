import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
     return (
          <div>
               <Form className="mx-5 mt-3">
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                         <Form.Label column sm={2}>
                              Email
                         </Form.Label>
                         <Col sm={10}>
                              <Form.Control type="email" placeholder="Email" />
                         </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                         <Form.Label column sm={2}>
                              Password
                         </Form.Label>
                         <Col sm={10}>
                              <Form.Control type="password" placeholder="Password" />
                         </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                         <Col sm={{ span: 10, offset: 2 }}>
                              <Form.Check label="Remember me" />
                         </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                         <Col sm={{ span: 10, offset: 2 }}>
                              <Button className="btn-warning" type="submit">Sign in</Button>
                         </Col>
                    </Form.Group>
               </Form>

               <p className="text-center" >New to ema-jone <Link to="/register" >Create account</Link></p>

          </div>
     );
};

export default Login;