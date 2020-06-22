import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class UploadForm extends Component {

    state = {
        selectedFile: null,
        label: "Choose your meme image",
        progressActive: false,
        currentProgress: 0,
        result: false,
        resultText: "",
    }

    fileOnChange = (event) => {
        // TODO: Validate number of files , file size, file type
        this.setState({
            selectedFile: event.target.files[0],
            label: event.target.files[0].name,
            progressActive: false,
            currentProgress: 0,
            result: false,
            resultText: "",
        })
    }

    handleFormSubmit = () => {
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);

        this.setState({
            progressActive: true,
            currentProgress: 0,
        })

        axios.post("http://localhost:3001/upload", formData, {
            onUploadProgress: ProgressEvent => {
                this.setState({
                    currentProgress: (ProgressEvent.loaded / ProgressEvent.total * 100),
                })
            },
        })
            .then(res => {
                this.setState({
                    result: true,
                    resultText: res.data,
                })
            })
            .catch(err => {
                this.setState({
                    progressActive: false,
                    currentProgress: 0,
                })
                alert("upload failed")
            })
    }

    render() {
        const handleProgressBar = () => {
            if (this.state.progressActive) {
                return <ProgressBar animated now={this.state.currentProgress} label={`${this.state.currentProgress}%`} />
            }
            else {
                return null;
            }
        };

        const handleJumbotron = () => {
            if (this.state.result) {
                return (
                    <Jumbotron fluid>
                        <Container>
                            <h4>OCR Result: </h4>
                            <p>
                                {this.state.resultText}
                            </p>
                        </Container>
                    </Jumbotron>
                )
            }
            else {
                return null;
            }
        };

        return (
            <Form >
                <Form.Group >
                    <Form.File id="imagefile" label={this.state.label} custom onChange={this.fileOnChange} />
                </Form.Group>
                <Form.Group>
                    {handleProgressBar()}
                </Form.Group>
                <Form.Group>
                    <Button variant="primary" onClick={this.handleFormSubmit}> Upload </Button>
                </Form.Group>
                <Form.Group>
                    {handleJumbotron()}
                </Form.Group>
            </Form>
        );
    }
}

export default UploadForm;