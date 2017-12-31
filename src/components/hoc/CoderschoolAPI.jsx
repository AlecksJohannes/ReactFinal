import React from 'react';
import { getSearchResult } from '../../http/request';

function withResult(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: []
      }
    }

    componentDidMount() {
      getSearchResult().then((response) => {
        this.setState({
          users: response
        })
      })
    }

    render() {
      return(<WrappedComponent {...this.props} fetchUsers={this.state.users} />)
    } 
  }
}

export { withResult } 
