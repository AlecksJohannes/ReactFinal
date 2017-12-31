import React, { Component } from 'react';
import { Section, Container, Title, Field, Label, Control, Input, Table, Select, Content, Button, LevelItem, Level } from 'bloomer';

export default class UploadJD extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fileArray: [],
            userInput: '',
            class: 'React'
        };
        this.handleUploadFiles = this.handleUploadFiles.bind(this);
        this.handleDeleteFile = this.handleDeleteFile.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleClassChange = this.handleClassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUploadFiles(e) {
        Array.from(e.target.files).forEach(file => {
            this.setState(prevState => ({
                fileArray: [...prevState.fileArray, file]    
            }))
        });
    }

    handleDeleteFile() {
        let index = this.state.userInput - 1
        this.setState(prevState => ({
            fileArray: [...prevState.fileArray.slice(0,index), ...prevState.fileArray.slice(index+1)]
        }));
    }

    handleUserInput(e) {
        this.setState({ userInput:e.target.value });
    }

    handleClassChange(e) {
        this.setState({ class: e.target.value });
    }

    handleSubmit(e) {
        alert('Files have been uploaded!');
        this.setState({ fileArray: [] });
    }

    render() {
        return (
            <Section>
                <Container>
                    
                    <Title isSize={1}>Upload Jobs</Title>

                    <Field>
                        <Label hasTextAlign="left">Browse Your Computer</Label>
                        <Control>
                            <Input type="file" multiple size="50" placeholder='Files' onChange={this.handleUploadFiles} />
                        </Control>
                        <Content hasTextAlign="left"><b>Tip:</b> Use the Control or the Shift key to select multiple files.</Content>
                    </Field>

                    <Table isBordered isStriped isNarrow>
                        <thead>
                            <tr className='is-selected'>
                                <th>File</th>
                                <th>Name</th>
                                <th>Size</th>
                                <th>Type</th>
                                <th>Last Modified Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.fileArray.map((file, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{file.name}</td>
                                        <td>{(file.size/1024).toFixed(0)} KB</td>
                                        <td>{file.type}</td>
                                        <td>{new Date(file.lastModified).toUTCString()}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>

                    <Field hasAddons>
                        <Label hasTextAlign="left">Assign JDs to class:</Label>
                        <Control>
                            <Select value={this.state.class} onChange={this.handleClassChange}>
                                <option value="React">React</option>
                                <option value="Ruby on Rails">Ruby on Rails</option>
                                <option value="iOS">iOS</option>
                                <option value="Android">Android</option>
                                <option value="Node JS">Node JS</option>
                            </Select>
                        </Control>
                    </Field>

                    <Field hasAddons>
                        <Label hasTextAlign="left">Choose file to delete:</Label>
                        <Control>
                            <Input type="text" placeholder="File Number" onChange={this.handleUserInput} />
                        </Control>
                        <Control>
                            <Button isColor="danger" onClick={this.handleDeleteFile}>Delete</Button> 
                        </Control>
                    </Field>
                    
                    <Field>
                        <Control>
                            <Button isColor="primary" onClick={this.handleSubmit}>Submit</Button> 
                        </Control>
                    </Field>

                </Container>
            </Section>
        )
    }
}
