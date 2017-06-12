import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';








class addMInistryDept extends Component {
  render() {
    return (
      <div className="addMInistryDept">
      


<div className="container">
  <div className="row">
    <form className="form-horizontal">
<fieldset>

{/* Form Name */}
<legend>Add/Edit Ministry or Department</legend>




{/* Ministry Department ID */}
<div className="form-group">
  <label className="col-md-4 control-label" for="min_deptID">Ministry/ Department ID</label>  
  <div className="col-md-3">
  <input id="min_deptID" name="min_deptID" placeholder="Enter ID " className="form-control input-md" required="" type="text"/>
    
  </div>
</div>

{/* Ministry Name */}
<div className="form-group">
  <label className="col-md-4 control-label" for="min_name">Ministry Name</label>  
  <div className="col-md-5">
  <input id="min_name" name="min_name" placeholder="" className="form-control input-md" required="" type="text"/>
    
  </div>
</div>

{/* Department Name */}
<div className="form-group">
  <label className="col-md-4 control-label" for="dept_name">Department Name</label>  
  <div className="col-md-5">
  <input id="dept_name" name="dept_name" placeholder="" className="form-control input-md" required="" type="text"/>
    
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

export default addMInistryDept;