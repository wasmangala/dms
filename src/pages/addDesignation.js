import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';








class addDesignation extends Component {
  render() {
    return (
      <div className="addDesignation">
      


<div className="container">
  <div className="row">
    <form className="form-horizontal">
<fieldset>

{/* Form Name */}
<legend>Add/Edit Designation</legend>




{/* Designation ID */}
<div className="form-group">
  <label className="col-md-4 control-label" for="designationID">Designation ID</label>  
  <div className="col-md-3">
  <input id="designationID" name="designationID" placeholder="Enter ID " className="form-control input-md" required="" type="text"/>
    
  </div>
</div>

{/* Designation Name */}
<div className="form-group">
  <label className="col-md-4 control-label" for="designation">Designation Name</label>  
  <div className="col-md-5">
  <input id="designation" name="designation" placeholder="" className="form-control input-md" required="" type="text"/>
    
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

export default addDesignation;