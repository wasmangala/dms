import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './uploader.css';
import './uploaderj.js';







class request extends Component {
  render() {
    return (
      <div className="request">
      


<div className="container">
  <div className="row">
    <form className="form-horizontal">
<fieldset>

{/* Form Name */}
<legend>Request</legend>

{/* RequestID input */}
<div className="form-group">
  <label className="col-md-4 control-label" for="requestID">Request ID</label>  
  <div className="col-md-3">
  <input id="requestID" name="requestID" placeholder="Auto Generating" className="form-control input-md" required="" type="text"/>
    
  </div>
</div>

{/* Ministry Department ID */}
<div className="form-group">
  <label className="col-md-4 control-label" for="min_deptID">Ministry/ Department ID</label>  
  <div className="col-md-3">
  <input id="min_deptID" name="min_deptID" placeholder="Auto Generating" className="form-control input-md" required="" type="text"/>
    
  </div>
</div>

{/* Ministry Department Name */}
<div className="form-group">
  <label className="col-md-4 control-label" for="min_dept_name">Ministry/ Department Name</label>  
  <div className="col-md-5">
  <input id="min_dept_name" name="min_dept_name" placeholder="Auto Generating" className="form-control input-md" required="" type="text"/>
    
  </div>
</div>

{/* Select Type */} 
<div className="form-group">
  <label className="col-md-4 control-label" for="Type">Request Type</label>
  <div className="col-md-2">
    <select id="Type" name="Type" className="form-control">
      <option value="New">New</option>
      <option value="Suppress">Suppress</option>
      <option value="Modify">Modify</option>
    </select>
  </div>
</div>

{/* Designation input */}
<div className="form-group">
  <label className="col-md-4 control-label" for="designation">Designation</label>  
  <div className="col-md-5">
  <input id="designation" name="designation" placeholder="Enter Designation Name" className="form-control input-md" type="text"/>
    
  </div>
</div>



{/* Salary Code input */}
<div className="form-group">
  <label className="col-md-4 control-label" for="salary_code">Salary Code</label>  
  <div className="col-md-2">
  <input id="salary_code" name="salary_code" placeholder="Enter Salary Code" className="form-control input-md" type="text"/>
    
  </div>
</div>

{/* Select Service Level */} 
<div className="form-group">
  <label className="col-md-4 control-label" for="service_level">Service Level</label>
  <div className="col-md-2">
    <select id="service_level" name="service_level" className="form-control">
      <option value="Primary">Primary</option>
      <option value="Secondary">Secondary</option>
      <option value="Tertiary">Tertiary</option>
      <option value="Senior">Senior</option>
    </select>
  </div>
</div>

{/* Grade input */}
<div className="form-group">
  <label className="col-md-4 control-label" for="grade">Grade</label>  
  <div className="col-md-2">
  <input id="grade" name="grade" placeholder="Enter Grade" className="form-control input-md" type="text"/>
    
  </div>
</div>

{/* No. of Posts input */}
<div className="form-group">
  <label className="col-md-4 control-label" for="noofposts">No. of Posts</label>  
  <div className="col-md-2">
  <input id="noofposts" name="noofposts" placeholder="Enter No." className="form-control input-md" type="text"/>
    
  </div>
</div>

 {/* Textarea */} 
<div className="form-group">
  <label className="col-md-4 control-label" for="description">Description</label>
  <div className="col-md-4">                     
    <textarea className="form-control" rows="5" id="description" name="description"></textarea>
  </div>
</div>

 <div className="col-md-12">
      <div className="row">
      <div className="control-group" id="fields">
          <label className="control-label" for="field1">
            Upload Your Files
          </label>
          <div className="controls">
           
              <div className="entry input-group col-xs-3">
                
             
                <input className="btn btn-primary" name="fields[]" type="file"/>
                <span className="input-group-btn">
      
              <button className="btn btn-success btn-add" type="button">
                                <span className="glyphicon glyphicon-plus"></span>
                </button>
                </span>
              </div>
           
          </div>
          
        </div>
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

export default request;