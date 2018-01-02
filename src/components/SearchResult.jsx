import React, { Component} from 'react';
import { Table, Button } from 'bloomer';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ''
    }
    this.handleSelection = this.handleSelection.bind(this);
    this.handleSelectStudent = this.handleSelectStudent.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }
  handleSelection(value) {
    console.log(value)
    this.setState({
      selectedOption: value
    })
  }
  handleSelectStudent() {

  }
  handleBack() {

  }
  render() {
    const child = this.props.fetchUsers.map((data) => {
      console.log(data.languages)
      return (
        <tr>
          <td>{data.id}</td>
          <td><a href="" onClick={this.handleSelectStudent}>{data.full_name}</a></td>
          <td>{data.location}</td>
          <td>{data.class_taken}</td>
          <td>{data.experience}</td>
          <td>{data.additional_skill}</td>
          <td>{data.score}</td>
          <td>{data.languages.map((data) => { return data.name }).join(', ')}</td>
          <td>{data.nation_languages.map((data) => { return data.name }).join(', ')}</td>
          <td>{data.additional_skills.map((data) => { return data.name }).join(', ')}</td>
        </tr>
      )
    })

    return (
      <div>
        <Button isColor="info" onClick={this.handleBack}>Back</Button> 
        <Table isBordered isStriped isNarrow>
          <thead>
            <tr className='is-selected'>
              <th>ID</th>
              <th>Name</th>
              <th>Location</th>
              <th>Classes taken</th>
              <th>Experience</th>
              <th>Additional Skill</th>
              <th>Score</th>
              <th>Language</th>
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
                    { value: JSON.stringify({isAscending: true, option: 'name'}), label: 'Ascending' },
                    { value: JSON.stringify({isAscending: false, option: 'name'}), label: 'Descending' },
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
                    { value: JSON.stringify({isAscending: true, option: 'location'}), label: 'Ascending' },
                    { value: JSON.stringify({isAscending: false, option: 'locatio '}), label: 'Descending' },
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
                    { value: JSON.stringify({isAscending: true, option: 'class_taken'}), label: 'Ascending' },
                    { value: JSON.stringify({isAscending: false, option: 'class_taken'}), label: 'Descending' },
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
                    { value: JSON.stringify({isAscending: true, option: 'experience'}), label: 'Ascending' },
                    { value: JSON.stringify({isAscending: false, option: 'experience'}), label: 'Descending' },
                  ]}
                />
              </th>
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
                    { value: JSON.stringify({isAscending: true, option: 'score'}), label: 'Ascending' },
                    { value: JSON.stringify({isAscending: false, option: 'score'}), label: 'Descending' },
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
                    { value: JSON.stringify({isAscending: true, option: 'languages'}), label: 'Ascending' },
                    { value: JSON.stringify({isAscending: false, option: 'languages'}), label: 'Descending' },
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
                    { value: JSON.stringify({isAscending: true, option: 'nation_languages'}), label: 'Ascending' },
                    { value: JSON.stringify({isAscending: false, option: 'nation_languages'}), label: 'Descending' },
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
                    { value: JSON.stringify({isAscending: true, option: 'additional_skills'}), label: 'Ascending' },
                    { value: JSON.stringify({isAscending: false, option: 'additional_skills'}), label: 'Descending' },
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

export default SearchResult;
