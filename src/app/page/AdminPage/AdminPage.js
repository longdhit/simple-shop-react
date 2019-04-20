import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import './AdminPage.css'
class AdminPage extends Component {
    render() {
        return (
         <div className="container-fluid main-container">
  <div className="col-md-2 sidebar">
    <div className="row">
      {/* uncomment code for absolute positioning tweek see top comment in css */}
      <div className="absolute-wrapper"> </div>
      {/* Menu */}
      <div className="side-menu">
        <nav className="navbar navbar-default" role="navigation">
          {/* Main Menu */}
          <div className="side-menu-container">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#"><span className="glyphicon glyphicon-dashboard" /> Dashboard</a></li>
              <li><a href="#"><span className="glyphicon glyphicon-plane" /> Active Link</a></li>
              <li><a href="#"><span className="glyphicon glyphicon-cloud" /> Link</a></li>
              {/* Dropdown*/}
              <li className="panel panel-default" id="dropdown">
                <a data-toggle="collapse" href="#dropdown-lvl1">
                  <span className="glyphicon glyphicon-user" /> Sub Level <span className="caret" />
                </a>
                {/* Dropdown level 1 */}
                <div id="dropdown-lvl1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <ul className="nav navbar-nav">
                      <li><a href="#">Link</a></li>
                      <li><a href="#">Link</a></li>
                      <li><a href="#">Link</a></li>
                      {/* Dropdown level 2 */}
                      <li className="panel panel-default" id="dropdown">
                        <a data-toggle="collapse" href="#dropdown-lvl2">
                          <span className="glyphicon glyphicon-off" /> Sub Level <span className="caret" />
                        </a>
                        <div id="dropdown-lvl2" className="panel-collapse collapse">
                          <div className="panel-body">
                            <ul className="nav navbar-nav">
                              <li><a href="#">Link</a></li>
                              <li><a href="#">Link</a></li>
                              <li><a href="#">Link</a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li><a href="#"><span className="glyphicon glyphicon-signal" /> Link</a></li>
            </ul>
          </div>{/* /.navbar-collapse */}
        </nav>
      </div>
    </div>  		</div>

  <div className="col-md-10 content">
    <div className="panel panel-default">
      <div className="panel-heading">
        Dashboard
      </div>
      <div className="panel-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  </div></div>

        )
    }

}
const mapState = (state) => ({

})
const actions = {

}
export default connect(mapState, actions)(AdminPage);