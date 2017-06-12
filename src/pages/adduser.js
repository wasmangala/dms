import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';








class adduser extends Component {
  render() {
    return (
      <div className="adduser">
      


<div className="container">
  <div className="row">
    <form className="form-horizontal">
<fieldset>

{/* Form Name */}
<legend>Add User</legend>

{/* Select Type */} 
<div className="form-group">
  <label className="col-md-4 control-label" for="Type">User Type</label>
  <div className="col-md-2">
    <select id="Type" name="Type" className="form-control">
      <option value="Request">Request</option>
      <option value="View">View</option>
      <option value="Recommend">Recommend</option>
      <option value="Approve">Approve</option>
      <option value="Admin">Admin</option>
    </select>
  </div>
</div>


{/* Ministry Department ID */}
<div className="form-group">
  <label className="col-md-4 control-label" for="min_deptID">Ministry/ Department ID</label>  
  <div className="col-md-3">
  <input id="min_deptID" name="min_deptID" placeholder="Enter ID If Request User" className="form-control input-md" required="" type="text"/>
    
  </div>
</div>

{/* First Name */}
<div className="form-group">
  <label className="col-md-4 control-label" for="firstname">First Name</label>  
  <div className="col-md-5">
  <input id="firstname" name="firstname" placeholder="Enter First Name" className="form-control input-md" required="" type="text"/>
    
  </div>
</div>

{/* Last Name */}
<div className="form-group">
  <label className="col-md-4 control-label" for="lastname">Last Name</label>  
  <div className="col-md-5">
  <input id="lastname" name="lastname" placeholder="Enter Last Name" className="form-control input-md" required="" type="text"/>
    
  </div>
</div>

{/* Username input */}
<div className="form-group">
  <label className="col-md-4 control-label" for="username">Username</label>  
  <div className="col-md-3">
  <input id="username" name="username" placeholder="Enter username" className="form-control input-md" type="text"/>
    
  </div>
</div>

{/* Password input */}
<div className="form-group">
  <label className="col-md-4 control-label" for="Password">Password</label>  
  <div className="col-md-3">
  <input id="Password" name="Password" placeholder="" className="form-control input-md" type="password"/>
    
  </div>
</div>

{/* Re-enter Password input */}
<div className="form-group">
  <label className="col-md-4 control-label" for="Password">Re-Enter Password</label>  
  <div className="col-md-3">
  <input id="Password" name="Password" placeholder="" className="form-control input-md" type="password"/>
    
  </div>
</div>



{/* Button */} 
<div className="form-group">
  <label className="col-md-4 control-label" for="submit"></label>

  <div className="col-md-4">
    <button id="submit" name="submit" className="btn btn-default">Add User</button>
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

export default adduser;