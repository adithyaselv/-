import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import {Form, Row} from 'react-bootstrap';

class UploadForm extends Component {

    handleFormSubmit = () => {
        alert("uploaded")
    }

    render () {
        return (
            <Form >
            <Form.Group >  
            <Row>
                <Form.File id="imagefile" label="Choose your meme image" custom/>
            </Row>
            </Form.Group>
            <Form.Group>
            <Row>  
                <Button variant="primary" onClick={this.handleFormSubmit}> Upload </Button>
            </Row>
            </Form.Group>
            </Form>
        );
    }
} 

export default UploadForm;