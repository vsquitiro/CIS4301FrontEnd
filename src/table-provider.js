import {TableContext} from './table-context';
import React from 'react';

class TableProvider extends React.Component {
    state = {
      table_headers: [],
      table_endpoint: 'http://localhost:3000/api/employees/',
    };
  
    handleNewHeaders = (headers_list) => {
        this.setState({table_headers: headers_list});
    }

    handleNewEndpoint = (endpoint) => {
        this.setState({table_endpoint: endpoint});
    }

    render() {
      return <TableContext.Provider value={{
        ...this.state,
        handleNewHeaders: this.handleNewHeaders,
        handleNewEndpoint: this.handleNewEndpoint,
      }}>
        {this.props.children}
      </TableContext.Provider>
    }
  }

  export default TableProvider;