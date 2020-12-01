import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import mapPage from "./components/mapPage.component";
// import AccidentGraph from "./components/accidentGraph.component.js";
import graphPage from "./components/graphPage.component";
import queriesPage from "./components/queriesPage.component";
import NavBar from "./components/navBar.components.js";

class App extends Component {
  render() {
    return (

      <div className="App darkenBackground">
        <NavBar/>
            <Router>
                <Switch>

                    <Route path="/queriesPage" component={queriesPage}/>
                    <Route path="/home" component={queriesPage}/>
                    <Route path="/graph" component={graphPage}/>
                    {/* <Route path="/accidentGraph" component={AccidentGraph}/> */}
                    <Route path="/map" component={mapPage}/>
                    {/* <Route path="/About" component={About}/> */}
                    
                </Switch>
            </Router>
      </div>

    );
  }
}

export default App;