import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
    <Header/>
    <header>
      <main className='py-3'>
    <Container>
      <Home/>
    </Container>
    </main>
    </header>
    </>
  );
}

export default App;
