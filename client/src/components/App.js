import MessageForm from './MessageForm';
import MeassageFeed from './MeassageFeed';
import { Container, Toast, ToastContainer } from 'react-bootstrap'
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
    this.toggleToast = this.toggleToast.bind(this)
    this.onMessageAdded = this.onMessageAdded.bind(this)
  }

  toggleToast(){
    this.setState({showToast: !this.state.showToast})
  }

  onMessageAdded(message){
    this.messageAddedRef.current(message)
    this.toggleToast(message)    
  }

  render() {
    return (
      <Container className="app rounded-3 px-0 bg-light">
        <MessageForm onMessageAdded={this.onMessageAdded} toggleToast={this.toggleToast}/>
        <MeassageFeed messageAdded={this.messageAddedRef}/>        
      </Container>
    );
  }
}

export default App;
