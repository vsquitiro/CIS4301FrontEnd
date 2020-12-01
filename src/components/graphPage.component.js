import React, { Component } from "react";
import TableProvider from '../table-provider';

import Graph from "./accidentGraph.component";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateRow   from "./create-row.component";

class graphPage extends Component {
  render() {
    return (
      <TableProvider>
          <div className="container">
            <CreateRow/>
            <Graph/>
          </div>
      </TableProvider>
    );
  }
}

export default graphPage;