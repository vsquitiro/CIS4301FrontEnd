import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import mapPage from "./components/mapPage.component";
// import AccidentGraph from "./components/accidentGraph.component.js";
import graphPage from "./components/graphPage.component";
import queriesPage from "./components/queriesPage.component";
import NavBar from "./components/navBar.components.js";
import About  from "./components/about.component.js";
class App extends Component {
  render() {
    return (

      <div className="App darkenBackground">
        <NavBar/>
            <Router>
                <Switch>

                    <Route path="/queriesPage" component={queriesPage}/>
                    <Route path="/home"        component={queriesPage}/>
                    <Route path="/graph"       component={graphPage}/>
                    <Route path="/map"         component={mapPage}/>
                    <Route path="/about"       component={About}/>
                    {/* <Route path="/accidentGraph" component={AccidentGraph}/> */}
                    
                </Switch>
            </Router>
      </div>

    );
  }
}

export default App;