import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Button} from 'react-bootstrap';

function App() {
  return (

    <div className="App">
      <header className="header">
        <p className='cabecalho'>
          404 NOT FOUND
        </p>
      </header>
      <Container className='App-header'>
      
        <Row className='linha'>
          <Col xs={12} md={6} >
            <Image className='image' src='../Scarecrow.png' fluid/>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Col xs={12}  sm={6} md={6}>
              <p className='titulo'>I have bad news for you</p>
            </Col>
            <Col xs={12}  sm={12} md={6}>
              <p className='corpo_titulo'>The page you are looking for might be removed or is temporarily unavailable</p>
            </Col>
            <Col xs={12}  sm={6} md={6} className=''>
              <Button className='float-left d-flex ' variant="dark" size="lg">Back to homepage</Button>
            </Col>
          
          </Col>
        </Row>
      </Container>
      <footer className='footer'>
        <p className='texto-footer'>created by Joelson Ramos Ferreira - devChallenges.io</p>
      </footer>

    </div>
  );
}

export default App;
