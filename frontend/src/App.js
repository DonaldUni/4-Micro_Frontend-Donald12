import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
}from "react-router-dom";

//pages
import HomePage from './HomePage/HomePage.js';
import Start from './Employee-page/Start-Page/EmployeeStartSeite.jsx';
import MeElement from './Employee-page/Me-Page/MePage';
import Menu from './Employee-page/TimeRecord-Page/Menu-Page/TimeRecordMenuPage';
import NewRecordPage from './Employee-page/TimeRecord-Page/NeuRecordPage/NewRecordPage';
import DetailsPage from './Employee-page/TimeRecord-Page/Details-Page/DetailsPage';
import NewVacationPage from './Employee-page/TimeRecord-Page/Vacation/Vacation';


class App extends Component{
  

  render(){

    return (
    
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Employee/start" component={Start} />
        <Route exact path="/Employee/Me" component={MeElement} />
        <Route exact path="/Employee/TimeRecord/Menu" component={Menu} />
        <Route exact path="/Employee/TimeRecord/NewRecord" component={NewRecordPage} />
        <Route  path="/Employee/TimeRecord/Details/" component={DetailsPage} />
        <Route  path="/Employee/TimeRecord/Vacation/" component={NewVacationPage} />
        

      </Router>
    );
  }
}


export default App;
