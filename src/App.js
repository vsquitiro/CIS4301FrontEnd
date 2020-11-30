import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import TableProvider from './table-provider';

import "bootstrap/dist/css/bootstrap.min.css";

import CreateRow from "./components/create-row.component";
import ResultTable from "./components/result-table.component";

class App extends Component {
  render() {
    return (

      <TableProvider>
        
        <Router>

          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to="/" className="navbar-brand">Traffic Fatality Analyzer</Link>
              <div className="collpase navbar-collapse"></div>
            </nav>
            <br/>
            <CreateRow />
            <ResultTable />
            {/* <Map /> */}
          </div>
          
        </Router>
       
      </TableProvider>




    );
  }
}

export default App;