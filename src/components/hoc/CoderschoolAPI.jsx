import React from 'react';
import { getSearchResult } from '../../http/request';
import _ from 'lodash';
function withResult(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: []
      }
    }

    componentDidMount() {
      getSearchResult('http://reactfinale.herokuapp.com/students', this.props.searchOptions).then((response) => {
        this.setState({
          // users: [...response,Student1]
          users: response
        })
      })
    }

    sortCharges(sort) {
      console.log(this.state.users);
      var sort = JSON.parse(sort)
      var sortedCharges
      if(sort.isAscending) {
        sortedCharges = _.sortBy(this.state.users, sort.option)
      } else {
        sortedCharges = _.sortBy(this.state.users, sort.option).reverse()
      }
      this.setState({
        users: sortedCharges
      })
    }

    render() {
      return(<WrappedComponent {...this.props}  filter={this.sortCharges.bind(this)} fetchUsers={this.state.users} />)
    } 
  }
}

export { withResult } 
