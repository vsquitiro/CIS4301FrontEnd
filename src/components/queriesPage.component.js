import React, { Component } from "react";
import TableProvider from '../table-provider';

import "bootstrap/dist/css/bootstrap.min.css";

import CreateRow   from "./create-row.component";
import ResultTable from "./result-table.component";

class queriesPage extends Component {
  render() {
    return (
      <TableProvider>
          <div className="container">
            <CreateRow />
            <ResultTable />
          </div>
      </TableProvider>
    );
  }
}

export default queriesPage;