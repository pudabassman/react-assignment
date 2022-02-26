import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../CSS/components/MessageFeedItem.css'
import utilities from '../utilities'
import axios from 'axios'
export default class MessageFeedItem extends PureComponent {  
  onAvatarClicked(email){
    axios.get('getLastMessage', { params: { email }})
      .then(({data}) => {
        console.log(data)
      })
      .catch(error => console.log(error))
  }

  render() {    
    const { email, text } = this.props
    return (
      <Container>
        <Row className="mb-3">
          <Col md="auto" className="d-flex ps-0">
            <img className="avatar" src={utilities.gravatarLink(email)} alt="Avatar" onClick={() => this.onAvatarClicked(email)}></img>
          </Col>
          <Col md="auto" className="d-flex flex-column">
            <Row className="font-weight-bold">
              <strong>{email}</strong>
            </Row>
            <Row className="text-muted">
              <span>{text}</span>
            </Row>
          </Col>
        </Row>        
      </Container>
    )
  }
}