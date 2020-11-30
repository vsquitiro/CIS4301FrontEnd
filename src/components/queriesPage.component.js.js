import React, { Component } from "react";
import { BrowserRouter as Switch, Router, Route, Link } from "react-router-dom";
import TableProvider from '../table-provider';

import "bootstrap/dist/css/bootstrap.min.css";

import CreateRow   from "./create-row.component";
import ResultTable from "./result-table.component";

class queriesPage extends Component {
  render() {
    return (
      <TableProvider>
          <div className="container">
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to="/" className="navbar-brand">Traffic Fatality Analyzer</Link>
              
              <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">Rows</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <br/> */}
            <CreateRow />
            <ResultTable />
          </div>
      </TableProvider>
    );
  }
}

export default queriesPage;