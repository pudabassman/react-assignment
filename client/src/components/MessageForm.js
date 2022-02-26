import React, { PureComponent } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import '../CSS/components/MessageForm.css'

export default class MessageForm extends PureComponent {
  constructor(props){
    super(props)
    this.saveMessage = this.saveMessage.bind(this)
  }

  clearText(){
    this.text.value = ''
  }

  saveMessage(e){
    e.preventDefault();
    const onMessageAdded = this.props.onMessageAdded
    const clearText = this.clearText.bind(this)
    const message = {
      email: this.email.value,
      text: this.text.value
    }

    axios.post('message', message)
      .then(({data: message}) => {        
        onMessageAdded(message)
        clearText()
      })
      .catch(error => console.log(error))
  }
  render() {
    return (
      <Form className="p-4 mt-3 rounded-top message-form" onSubmit={(e) => this.saveMessage(e)}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control type="email" placeholder="Email" ref={input => this.email = input} required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Control as="textarea" rows={3} placeholder="Message" ref={input => this.text = input} required/>
        </Form.Group>   
        <div className="d-flex align justify-content-end">
          <Button variant="primary" type="submit" className="align-baseline">
            SUBMIT
          </Button>
        </div>          
      </Form>
    )
  }
}