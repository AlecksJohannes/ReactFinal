import React from 'react';
import { getSearchResult } from '../../http/request';
import _ from 'lodash';
function withResult(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      console.log('a:', props)
      super(props);
      this.state = {
        users: [],
        onFinish: props.onFinish
      }
    }


    sortCharges(sort) {
      console.log('Hello!');
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
        if(this.props.onFinish == false){
        getSearchResult('http://reactfinale.herokuapp.com/students', this.props.searchOptions).then((response) => {
          this.props.onFinishOk();
          this.setState({        
            users: response
          })

        })
      }
      
      return(<WrappedComponent {...this.props}  filter={this.sortCharges.bind(this)} fetchUsers={this.state.users} />)
    } 
  }
}

export { withResult } 
