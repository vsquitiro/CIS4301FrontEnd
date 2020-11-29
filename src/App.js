import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import TableProvider from './table-provider';

import "bootstrap/dist/css/bootstrap.min.css";



import Map           from "./components/mapDot-overlay.component.js";
import AccidentGraph from "./components/accidentGraph.component.js";
import queriesPage   from "./components/queriesPage.component.js";
import NavBar        from "./components/navBar.components.js";

import logo from "./logo.png";




class App extends Component {
  render() {
    return (


      <div className="App darkenBackground">
        <NavBar/>
            <Router>
                <Switch>

                    <Route path="/queriesPage"     component={queriesPage}/>
                    <Route path="/accidentGraph"   component={AccidentGraph}/>
                    {/* <Route path="/map"             component={Map}/> */}
                    {/* <Route path="/About"       component={About}/> */}
                    
                </Switch>
            </Router>
      </div>
    

    );
  }
}

export default App;