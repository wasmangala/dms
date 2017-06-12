import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';








class addSalaryCode extends Component {
  render() {
    return (
      <div className="addSalaryCode">
      


<div className="container">
  <div className="row">
    <form className="form-horizontal">
<fieldset>

{/* Form Name */}
<legend>Add/Edit Salary Code</legend>




{/* Salary Code ID */}
<div className="form-group">
  <label className="col-md-4 control-label" for="salarycodeID">Salary Code ID</label>  
  <div className="col-md-3">
  <input id="salarycodeID" name="salarycodeID" placeholder="Enter ID " className="form-control input-md" required="" type="text"/>
    
  </div>
</div>

{/* Grade */}
<div className="form-group">
  <label className="col-md-4 control-label" for="salarycode">Salary Code</label>  
  <div className="col-md-5">
  <input id="salarycode" name="salarycode" placeholder="" className="form-control input-md" required="" type="text"/>
    
  </div>
</div>







{/* Button */} 
<div className="form-group">
  <label className="col-md-4 control-label" for="submit"></label>

  <div className="col-md-4">
    <button id="submit" name="submit" className="btn btn-default">Save</button>
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

export default addSalaryCode;