import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';





class App extends Component {
  render() {
    return (
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
  <div className="row">
    <form className="form-horizontal">
<fieldset>

{/* Form Name */}
<legend>Recommendation</legend>

{/* RequestID input */}
<div className="form-group">
  <label className="col-md-4 control-label" for="requestID">Request ID</label>  
  <div className="col-md-3">
  <input id="requestID" name="requestID" placeholder="" className="form-control input-md" required="" type="text"/>
    
  </div>
</div>

{/* Ministry Department ID */}
<div className="form-group">
  <label className="col-md-4 control-label" for="min_deptID">Ministry/ Department ID</label>  
  <div className="col-md-3">
  <input id="min_deptID" name="min_deptID" placeholder="" className="form-control input-md" required="" type="text" disabled="disabled"/>
    
  </div>
</div>

{/* Ministry Department Name */}
<div className="form-group">
  <label className="col-md-4 control-label" for="min_dept_name">Ministry/ Department Name</label>  
  <div className="col-md-3">
  <input id="min_dept_name" name="min_dept_name" placeholder="" className="form-control input-md" required="" type="text" disabled="disabled"/>
    
  </div>
  <div className="col-md-5">                     
    <textarea className="form-control" placeholder="About Ministry Department Name"id="ministry_department_recommendation" name="ministry_department_recommendation" ></textarea>
  </div>
</div>

{/* Select Type */} 
<div className="form-group">
  <label className="col-md-4 control-label" for="type">Type</label>  
  <div className="col-md-3">
  <input id="type" name="type" placeholder="" className="form-control input-md" type="text" disabled="disabled"/>
    
  </div>
  <div className="col-md-5">                     
    <textarea className="form-control" placeholder="About Type"id="type_recommendation" name="type_recommendation" ></textarea>
  </div>
</div>

{/* Designation input */}
<div className="form-group">
  <label className="col-md-4 control-label" for="designation">Designation</label>  
  <div className="col-md-3">
  <input id="designation" name="designation" placeholder="" className="form-control input-md" type="text" disabled="disabled"/>
    
  </div>
   <div className="col-md-5">                     
    <textarea className="form-control" placeholder="About Designation"id="designation_recommendation" name="designation_recommendation" ></textarea>
  </div>
</div>



{/* Salary Code input */}
<div className="form-group">
  <label className="col-md-4 control-label" for="salary_code">Salary Code</label>  
  <div className="col-md-3">
  <input id="salary_code" name="salary_code" placeholder="" className="form-control input-md" type="text" disabled="disabled"/>
    
  </div>
   <div className="col-md-5">                     
    <textarea className="form-control" placeholder="About Salary Code"id="salary_code_recommendation" name="salary_code_recommendation" ></textarea>
  </div>
</div>

{/* Select Service Level */} 
<div className="form-group">
  <label className="col-md-4 control-label" for="service_level">Service Level</label>  
  <div className="col-md-3">
  <input id="service_level" name="service_level" placeholder="" className="form-control input-md" type="text" disabled="disabled"/>
    
  </div>
   <div className="col-md-5">                     
    <textarea className="form-control" placeholder="About Service Level"id="service_level_recommendation" name="service_level_recommendation" ></textarea>
  </div>
</div>

{/* Grade input */}
<div className="form-group">
  <label className="col-md-4 control-label" for="grade">Grade</label>  
  <div className="col-md-3">
  <input id="grade" name="grade" placeholder="" className="form-control input-md" type="text" disabled="disabled"/>
    
  </div>
   <div className="col-md-5">                     
    <textarea className="form-control" placeholder="About Grade"id="comments" name="comments" ></textarea>
  </div>
</div>

{/* No. of Posts input */}
<div className="form-group">
  <label className="col-md-4 control-label" for="noofposts">No. of Posts</label>  
  <div className="col-md-3">
  <input id="noofposts" name="noofposts" placeholder="" className="form-control input-md" type="text" disabled="disabled"/>
    
  </div>
   <div className="col-md-5">                     
    <textarea className="form-control" placeholder="About No. of Posts"id="no_of_posts_recommendation" name="no_of_posts_recommendation" ></textarea>
  </div>
</div>

 {/* Textarea */} 
<div className="form-group">
  <label className="col-md-4 control-label" for="Description">Description</label>
  <div className="col-md-3">                     
    <textarea className="form-control" id="comments" name="comments" rows="5"disabled="disabled"></textarea>
  </div>
   <div className="col-md-5">                     
    <textarea className="form-control" placeholder="About Description"id="description_recommendation" name="description_recommendation" ></textarea>
  </div>
</div>


{/* Button */} 
<div className="form-group">
  <label className="col-md-4 control-label" for="submit"></label>
  <div className="col-md-4">
    <button id="submit" name="submit" className="btn btn-default">Submit</button>
  </div>
</div>

</fieldset>
</form>

  </div>
</div>




</div>
    );
  }
}

export default App;