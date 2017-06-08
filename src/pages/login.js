import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './login.css';



class login extends Component {
  render() {
    return (
      <div className="login">
      

<div id="loginbox" className="mainbox col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3"> 

<div className="panel panel-default" >
            <div className="panel-heading">
                <div className="panel-title text-center">Please Login</div>
            </div>     

            <div className="panel-body" >

                <form name="form" id="form" className="form-horizontal" enctype="multipart/form-data" method="POST">
                   
                    <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input id="user" type="text" className="form-control" name="user" value="" placeholder="Username"/>                                        
                    </div>

                    <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                        <input id="password" type="password" className="form-control" name="password" placeholder="Password"/>
                    </div>                                                                  

                    <div className="form-group">
                    
                        <div className="col-sm-12 controls">
                            <button type="submit" href="#" className="btn btn-primary pull-right"><i className="glyphicon glyphicon-log-in"></i> Log in</button>                          
                        </div>
                    </div>

                </form>     

            </div>                     
        </div>


      </div>
  

</div>
    );
  }
}

export default login;