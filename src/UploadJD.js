import React, { Component } from 'react';

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
            <div>
        
                <br/>Upload Jobs<br/><br/>
                
                <input type="file" multiple size="50" onChange={this.handleUploadFiles} /><br/><br/>

                <table width="100%" margin="100" border="1px solid black">
                    <tbody>
                        <tr>
                            <th>File</th>
                            <th>Name</th>
                            <th>Size</th>
                            <th>Type</th>
                            <th>Last Modified Date</th>
                        </tr>
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
                </table>
                <br/>
                <p><b>Tip:</b> Use the Control or the Shift key to select multiple files.</p>

                <br/>

                File Number:
                <input type="text" onChange={this.handleUserInput} />
                <button onClick={this.handleDeleteFile}>Delete</button> 
                <br/><br/>
                
                Class:
                <select value={this.state.class} onChange={this.handleClassChange}>
                    <option value="React">React</option>
                    <option value="Ruby on Rails">Ruby on Rails</option>
                    <option value="iOS">iOS</option>
                    <option value="Android">Android</option>
                    <option value="Node JS">Node JS</option>
                </select>
                

                <br/><br/>

                <input type="submit" value="Submit" onClick={this.handleSubmit} />
            </div>
        )
    }
}
