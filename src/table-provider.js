import {TableContext} from './table-context';
import React from 'react';

class TableProvider extends React.Component {
    state = {
      table_headers: [],
      table_obj: {},
      table_endpoint: 'https://localhost:3000/api/state_ranking/',
    };
  
    handleNewHeaders = (headers_list) => {
        this.setState({table_headers: headers_list});
    }

    handleNewEndpoint = (endpoint, obj) => {
        this.setState({table_endpoint: endpoint});
        this.setState({table_obj: obj});
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