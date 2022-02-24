import React, { PureComponent } from 'react'
import { Form, Button } from 'react-bootstrap'
export default class MessageForm extends PureComponent {
  render() {
    return (
      <Form className="p-3 m-3 bg-light rounded-top" >
        <Form.Group className="mb-3" controlId="formEmail" bg="dark">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter message"/>
        </Form.Group>   
        <div className="d-flex align justify-content-end">
          <Button variant="primary" type="submit" className="align-baseline">
            Submit
          </Button>
        </div>          
      </Form>
    )
  }
}