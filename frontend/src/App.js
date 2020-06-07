import React from 'react';
import UploadForm from './UploadForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {

  let mainContainterStyle = {
    border: "1px solid #cecece", 
    borderRadius: "10px", 
    margin: "10px auto",
    width: "95%"
  }

  return (
    <Container style={mainContainterStyle} fluid>
      <div className="text-center">
        <h1 >மெய்யாலுமா ?</h1>
        <h6 >An app to fact check your memes</h6>
      </div>
      <div style={{padding: "15px"}}>
      <UploadForm />
      </div>
    </Container>
  );
}

export default App;
