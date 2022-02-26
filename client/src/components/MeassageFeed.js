import React, { Component } from 'react'
import MessageFeedItem from './MessageFeedItem'
import { InputGroup, FormControl, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from  'axios'
import '../CSS/components/MessageFeed.css'

export default class MeassageFeed extends Component { 
  constructor(props){
    super(props)
    this.state = {
      searchTerm: '',
      messages: [],
      filteredMessages: []
    }
    props.messageAdded.current = (message) => {
      this.setState({ messages: [message, ...this.state.messages] })
      if(this.state.searchTerm)
        this.filterMessages()
    }
    this.setSearchTerm = this.setSearchTerm.bind(this)
  } 

  componentDidMount() {
    axios.get('messages')
      .then(({data: { messages }}) => {
        this.setState({messages, filteredMessages: messages})
      })
      .catch(error => console.log(error))
  }

  setSearchTerm({ target: { value }}){
    this.setState({searchTerm: value})
    this.filterMessages()
  }

  filterMessages(){      
      this.setState({
        filteredMessages: [...this.state.messages.filter(message => message.email.toLowerCase().includes(this.state.searchTerm))]
      })   
  }

  render() {
    let search 
    const { filteredMessages } = this.state
    if(filteredMessages.length)
      search = <InputGroup className="mb-3">
                <InputGroup.Text id="Filter">
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
                <FormControl
                  placeholder="Filter"
                  aria-label="Filter"
                  onChange={this.setSearchTerm}
                />
              </InputGroup>
    
    return (
      <div className='bg-light p-4 mb-4'>
        {search} 
        <Container className='message-feed ps-0'>                      
          {filteredMessages.map((message => {
            const { _id: id, email, text } = message
            return <MessageFeedItem key={id} text={text} email={email} />          
          }))}
        </Container>     
      </div> 
    )
  }
}