import MessageForm from './MessageForm';
import MeassageFeed from './MeassageFeed';
import { Container } from 'react-bootstrap'
import React, { createRef } from 'react';
import '../CSS/components/App.css'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      showToast: false,
      toastBody: ""
    }
    this.messageAddedRef = createRef();
    this.onMessageAdded = this.onMessageAdded.bind(this)
  }

  onMessageAdded(message){
    this.messageAddedRef.current(message)    
  }

  render() {
    return (
      <Container className="app rounded-3 px-0 bg-light">
        <MessageForm onMessageAdded={this.onMessageAdded}/>
        <MeassageFeed messageAdded={this.messageAddedRef}/>        
      </Container>
    );
  }
}

export default App;
