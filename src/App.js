import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateRow from "./components/create-row.component";
import EditRow from "./components/edit-row.component";
import RowsList from "./components/rows-list.component";

import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">Traffic Fatality Analyzer</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Rows</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Row</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={RowsList} />
          <Route path="/edit/:EMPLID" component={EditRow} />
          <Route path="/create" component={CreateRow} />
        </div>
      </Router>
    );
  }
}

export default App;