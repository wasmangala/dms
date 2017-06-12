import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import login from './pages/login'
import home from './pages/home'
import request from './pages/request'
import recommendation from './pages/recommendation'
import approval from './pages/approval'
import requestDetails from './pages/requestDetails'
import adduser from './pages/adduser'
import addMinistryDept from './pages/addMinistryDept'
import addDesignation from './pages/addDesignation'
import addGrade from './pages/addGrade'
import addSalaryCode from './pages/addSalaryCode'




import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';





class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">DMS Cadre Management System</a>
    </div>


    <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        

        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Request <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">click on this link</a></li>
          </ul>
        </li>

        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Approval <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">click on this link</a></li>
          </ul>
        </li>

        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Reports <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">click on this link</a></li>
          </ul>
        </li>
      </ul>
      
       

      <ul className="nav navbar-nav navbar-right">
        
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Admin <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>

          </ul>

        </li>
            <li><a href="#">Logout</a></li>
      </ul>
    </div>
  </div>
</nav>




<div className="container">

</div>

<Route exact={true} path="/" component={login} />
<Route path="/home" component={home} />
<Route path="/request" component={request} />
<Route path="/recommendation" component={recommendation} />
<Route path="/approval" component={approval} />
<Route path="/requestDetails" component={requestDetails} />
<Route path="/adduser" component={adduser} />
<Route path="/addMinistryDept" component={addMinistryDept} />
<Route path="/addDesignation" component={addDesignation} />
<Route path="/addGrade" component={addGrade} />
<Route path="/addSalaryCode" component={addSalaryCode} />
 

</div>
</Router>
    );
  }
}

export default App;