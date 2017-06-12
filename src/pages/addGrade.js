import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';








class addGrade extends Component {
  render() {
    return (
      <div className="addGrade">
      


<div className="container">
  <div className="row">
    <form className="form-horizontal">
<fieldset>

{/* Form Name */}
<legend>Add/Edit Grade</legend>




{/* Grade ID */}
<div className="form-group">
  <label className="col-md-4 control-label" for="gradeID">Grade ID</label>  
  <div className="col-md-3">
  <input id="gradeID" name="gradeID" placeholder="Enter ID " className="form-control input-md" required="" type="text"/>
    
  </div>
</div>

{/* Grade */}
<div className="form-group">
  <label className="col-md-4 control-label" for="grade">Grade</label>  
  <div className="col-md-5">
  <input id="grade" name="grade" placeholder="" className="form-control input-md" required="" type="text"/>
    
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

export default addGrade;