import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import {Form, Row} from 'react-bootstrap';
import axios from 'axios';

class UploadForm extends Component {

    state = {
        selectedFile: null,
        label: "Choose your meme image"
    }

    fileOnChange = (event) => {
        // TODO: Validate number of files , file size, file type
        this.setState ({
            selectedFile: event.target.files[0],
            label: event.target.files[0].name
        })
    }

    handleFormSubmit = () => {
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);

        axios.post("http://localhost:3001/upload", formData) 
        .then(res => { 
            alert(res.data)
        })
        .catch(err => {
            alert("upload failed")
        })
    }

    render () {
        return (
            <Form >
            <Form.Group >  
            <Row>
                <Form.File id="imagefile" label={this.state.label} custom onChange={this.fileOnChange} />
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