import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TableProvider from './table-provider';

import "bootstrap/dist/css/bootstrap.min.css";

import CreateRow from "./components/create-row.component";
import ResultTable from "./components/result-table.component";

import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <TableProvider>
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to="/" className="navbar-brand">Traffic Fatality Analyzer</Link>
              <div className="collpase navbar-collapse">
                {/* <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">Rows</Link>
                  </li>
                </ul> */}
              </div>
            </nav>
            <br/>
            <Route path="/" component={CreateRow} />
            <Route path="/" component={ResultTable} />
          </div>
        </Router>
      </TableProvider>
    );
  }
}

export default App;