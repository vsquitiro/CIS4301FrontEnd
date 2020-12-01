import React, { Component } from "react";
import TableProvider from '../table-provider';

import Map from "./mapDot-overlay.component";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateRow   from "./create-row.component";

class mapPage extends Component {
  render() {
    return (
      <TableProvider>
          <div className="container">
            <CreateRow />
            <Map />
          </div>
      </TableProvider>
    );
  }
}

export default mapPage;