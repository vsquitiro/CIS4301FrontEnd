import React, { Component } from "react";
import { BrowserRouter as Switch, Router, Route, Link } from "react-router-dom";
import TableProvider from '../table-provider';

import "bootstrap/dist/css/bootstrap.min.css";

import CreateRow   from "./create-row.component";
import EditRow     from "./edit-row.component";
import RowsList    from "./rows-list.component";
import ResultTable from "./result-table.component";

import Map         from "./mapDot-overlay.component.js";

import logo from "../logo.png";




class queriesPage extends Component {
  render() {
    return (


      <TableProvider>
        
        {/* <Router> */}

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
            <CreateRow />
            <ResultTable />
            {/* <Route path="/" component={CreateRow} /> */}
            {/* <Route path="/" component={ResultTable} /> */}

            {/*<Map /> */}

            {/* <Map />    <===== Uncomment this or Place this along with the 
                                Import map above to place map on any page */}
                
          </div>
          

        {/* </Router> */}
       
      </TableProvider>

    );
  }
}

export default queriesPage;