import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class MessageFeedItem extends PureComponent {
  render() {
    return (
      <Container className="m-3">
        <Row>
          <Col md="auto" className="d-flex">
            <img src="https://www.gravatar.com/avatar/94d093eda664addd6e450d7e9881bcad?s=32&d=identicon&r=PG" alt="Avatar"></img>
          </Col>
          <Col md="auto" className="d-flex flex-column">
            <Row className="font-weight-bold">Some@email.com</Row>
            <Row className="text-muted">woo hoo...</Row>
          </Col>
        </Row>
      </Container>
    )
  }
}