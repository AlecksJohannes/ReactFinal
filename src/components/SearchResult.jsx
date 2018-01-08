import React, { Component} from 'react';
import { Table, Button } from 'bloomer';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Student2 from '../student2.json';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isProfile: false,
      selectedOption: ''
      
    }
    this.handleSelection = this.handleSelection.bind(this);
    this.handleSelectStudent = this.handleSelectStudent.bind(this);
  }
  handleSelection(value) {
    console.log('hello world:',value)
    this.setState({
      datatest: Student2,
      selectedOption: value
    })
  }
  handleSelectStudent(e) {
    e.preventDefault();
    this.props.handleSelectStudent()
  }
  render() {
    const child = this.props.fetchUsers.map((data) => {
      console.log('hello world:', data.languages)
      return (
        <tr>
          <td>{data.id}</td>
          <td><a href="" onClick={this.handleSelectStudent}>{data.username}</a></td>
          <td>{data.location || 'Ho Chi Minh City'}</td>
          <td>{data.experience}</td>
          <td>{data.score}</td>
          <td>{data.languages.map((data) => { return data.name }).join(', ')}</td>
          <td>{data.nation_languages.map((data) => { return data.name }).join(', ')}</td>
          <td>{data.additional_skills.map((data) => { return data.name }).join(', ')}</td>
        </tr>
      )
    })
    if(this.state.isProfile==false){
    return (
      <div>
        <Table isBordered isStriped isNarrow>
          <thead>
            <tr className='is-selected'>
              <th>ID</th>
              <th>Name</th>
              <th>Location</th>
              <th>Experience</th>
              <th>Score</th>
              <th>Classes taken</th>
              <th>Nation Language</th>
              <th>Additional Skills</th>
            </tr>
            <tr>
              <th></th>
              <th>
              <Select
                  name="form-field-name"
                  value={this.state.selectedOption}
                  onChange={(selectedOption) => {
                      this.props.filter(selectedOption.value);
                      this.handleSelection(selectedOption.value)
                    }
                  }
                  options={[
                    { value: JSON.stringify({isAscending: true, option: 'name'}), label: 'ASC' },
                    { value: JSON.stringify({isAscending: false, option: 'name'}), label: 'DESC' },
                  ]}
                />
              </th>
              <th>
                 <Select
                  name="form-field-name"
                  value={this.state.selectedOption}
                  onChange={(selectedOption) => {
                      this.props.filter(selectedOption.value);
                      this.handleSelection(selectedOption.value)
                    }
                  }
                  options={[
                    { value: JSON.stringify({isAscending: true, option: 'location'}), label: 'ASC' },
                    { value: JSON.stringify({isAscending: false, option: 'location'}), label: 'DESC' },
                  ]}
                />
              </th>
              <th>
                 <Select
                  name="form-field-name"
                  value={this.state.selectedOption}
                  onChange={(selectedOption) => {
                      this.props.filter(selectedOption.value);
                      this.handleSelection(selectedOption.value)
                    }
                  }
                  options={[
                    { value: JSON.stringify({isAscending: true, option: 'experience'}), label: 'ASC' },
                    { value: JSON.stringify({isAscending: false, option: 'experience'}), label: 'DESC' },
                  ]}
                />
              </th>
              <th>
               <Select
                  name="form-field-name"
                  value={this.state.selectedOption}
                  onChange={(selectedOption) => {
                      this.props.filter(selectedOption.value);
                      this.handleSelection(selectedOption.value)
                    }
                  }
                  options={[
                    { value: JSON.stringify({isAscending: true, option: 'score'}), label: 'ASC' },
                    { value: JSON.stringify({isAscending: false, option: 'score'}), label: 'DESC' },
                  ]}
                />
              </th>
              <th>
               <Select
                  name="form-field-name"
                  value={this.state.selectedOption}
                  onChange={(selectedOption) => {
                      this.props.filter(selectedOption.value);
                      this.handleSelection(selectedOption.value)
                    }
                  }
                  options={[
                    { value: JSON.stringify({isAscending: true, option: 'languages'}), label: 'ASC' },
                    { value: JSON.stringify({isAscending: false, option: 'languages'}), label: 'DESC' },
                  ]}
                />
                </th>
                <th>
               <Select
                  name="form-field-name"
                  value={this.state.selectedOption}
                  onChange={(selectedOption) => {
                      this.props.filter(selectedOption.value);
                      this.handleSelection(selectedOption.value)
                    }
                  }
                  options={[
                    { value: JSON.stringify({isAscending: true, option: 'nation_languages'}), label: 'ASC' },
                    { value: JSON.stringify({isAscending: false, option: 'nation_languages'}), label: 'DESC' },
                  ]}
                />
              </th>
              <th>
               <Select
                  name="form-field-name"
                  value={this.state.selectedOption}
                  onChange={(selectedOption) => {
                      this.props.filter(selectedOption.value);
                      this.handleSelection(selectedOption.value)
                    }
                  }
                  options={[
                    { value: JSON.stringify({isAscending: true, option: 'additional_skills'}), label: 'ASC' },
                    { value: JSON.stringify({isAscending: false, option: 'additional_skills'}), label: 'DESC' },
                  ]}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {child}
          </tbody>
        </Table>
      </div>
    );
  }
  }
}

export default SearchResult;
