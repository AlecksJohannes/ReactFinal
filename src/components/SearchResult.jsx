import React, { Component} from 'react';
import { Table } from 'bloomer';

class SearchResult extends Component {
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
