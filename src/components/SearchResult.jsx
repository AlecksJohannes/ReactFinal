import React, { Component} from 'react';
import { Table } from 'bloomer';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ''
    }
  }
  handleSelection(value) {
    console.log(value)
    this.setState({
      selectedOption: value
    })
  }
  render() {
    const child = this.props.fetchUsers.map((data) => {
      return (
        <tr>
          <td>{data.id}</td>
          <td>{data.full_name}</td>
          <td>{data.location}</td>
          <td>{data.class_taken}</td>
          <td>{data.experience}</td>
          <td>{data.additional_skill}</td>
          <td>{data.score}</td>
        </tr>
      )
    })

    return (
      <div>
        <Table isBordered isStriped isNarrow>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Location</th>
              <th>Classes taken</th>
              <th>Experience</th>
              <th>Additional Skill</th>
              <th>Score</th>
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
