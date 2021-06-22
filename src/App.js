import {BrowserRouter, Route, withRouter, Switch, Redirect, NavLink} from "react-router-dom";
import './App.module.css';
import Converter from "./components/Converter";
import React from "react";
import CourseContainer from "./components/CourseContainer";


function App() {

  return (
    <div className="App">

        <nav>
            <div>
                <NavLink to="/converter" >Converter</NavLink>
            </div>
            <div>
                <NavLink to="/course"  >Course</NavLink>
            </div>
        </nav>

        <Switch>
            <Route path="/converter" render={() => <Converter/>}/>
            <Route path="/course" render={() => <CourseContainer/>}/>
        </Switch>
    </div>
  );
}

export default App;
