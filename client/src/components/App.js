import MessageForm from './MessageForm';
import MeassageFeed from './MeassageFeed';
import { Container } from 'react-bootstrap'
function App() {
  return (
    <Container className="rounded-3">
      <MessageForm/>
      <MeassageFeed/>
    </Container>
  );
}

export default App;
