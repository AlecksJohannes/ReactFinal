import React, { Component } from 'react';
import { Section, Container, Title, Field, Label, Control, Input, Table, Select, Content, Button } from 'bloomer';

export default class UploadJD extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fileArray: [],
            class: 'React'
        };
        this.handleUploadFiles = this.handleUploadFiles.bind(this);
        this.handleDeleteFile = this.handleDeleteFile.bind(this);
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

    handleDeleteFile(index) {
        this.setState(prevState => ({
            fileArray: [...prevState.fileArray.slice(0,index), ...prevState.fileArray.slice(index+1)]
        }));   
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
                            <Input type="file" isColor="white" multiple size="50" placeholder='Files' onChange={this.handleUploadFiles} />
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
                                <th>Action</th>
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
                                        <td>
                                            <Button 
                                                isColor="danger" 
                                                onClick={() => this.handleDeleteFile(index)}>
                                                <i class="fa fa-trash fa"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>

                    <Field hasAddons>
                        <Label hasTextAlign="left">Assign JDs to class:&nbsp;&nbsp;</Label>
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
                    
                    <Field>
                        <Control>
                            <Button isColor="info" onClick={this.handleSubmit}>Submit</Button> 
                        </Control>
                    </Field>

                </Container>
            </Section>
        )
    }
}