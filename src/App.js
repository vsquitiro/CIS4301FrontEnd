import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import TableProvider from './table-provider';

import "bootstrap/dist/css/bootstrap.min.css";

import CreateRow from "./components/create-row.component";
// import EditRow from "./components/edit-row.component";
// import RowsList from "./components/rows-list.component";
import ResultTable from "./components/result-table.component";

// import Map from "./components/mapDot-overlay.component.js";

// import logo from "./logo.png";

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