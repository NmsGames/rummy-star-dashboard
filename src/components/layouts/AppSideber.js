 
import { Link } from "react-router-dom";
import React, { useState } from "react";
function AppSideber() {
  const tokenData = JSON.parse(sessionStorage.getItem("token"));
  if(!tokenData){
    sessionStorage.removeItem("token");
    window.location.reload();
  }
  const [role, setRole] = useState(tokenData.user.role_id);
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="index3.html" className="brand-link">
        <img
          src="logo.jpg"
          alt="Rummy"
          className="brand-image img-circle elevation-3"
        />
        <span className="brand-text font-weight-light">Admin</span>
      </a>
      <div className="sidebar">
        {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Alexander Pierce
            </a>
          </div>
        </div>  */}

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item menu-open">
              <Link to="/" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-header">Users Management</li> 
            {role === 2 ? (
                <>
                <li className="nav-item">
                <Link to="/AddNewPlayer" className="nav-link">
                  <i className="fa-solid fa-user-plus nav-icon" />
                  <p> Add Player</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/PlayersList" className="nav-link">
                  <i className="fa-solid fa-users nav-icon" />
                  <p> View Players</p>
                </Link>
              </li>
                </>
              ): (role === 1) ?(
                <>

<li className="nav-item">
              <Link to="/AddNewStokez" className="nav-link">
                <i className="fa-solid fa-user-plus nav-icon" />
                <p> Add Stokez</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/StokezList" className="nav-link">
                <i className="fa-solid fa-users nav-icon" />
                <p> View Stokez</p>
              </Link>
            </li>
                </>
              ):""}



<li className="nav-item">
              <Link to="/AddNewDistributor" className="nav-link">
                <i className="fa-solid fa-user-plus nav-icon" />
                <p> Add Agents</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/DistributorList" className="nav-link">
                <i className="fa-solid fa-users nav-icon" />
                <p> View Agents</p>
              </Link>
            </li> 
  












                <li className="nav-item">
                <Link to="/AddNewPlayer" className="nav-link">
                  <i className="fa-solid fa-user-plus nav-icon" />
                  <p> Add Player</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/PlayersList" className="nav-link">
                  <i className="fa-solid fa-users nav-icon" />
                  <p> View Players</p>
                </Link>
              </li>


                       
             
          
              
            <li className="nav-header">Points & Reports</li>
            
            <li className="nav-item">
                                <Link to="/viewpointStokez" className="nav-link">
                                    <i className="fa-solid fa-comments-dollar nav-icon"></i>
                                    <p>Transactions Report</p>
                                </Link>
                            </li>
                            <li className="nav-item">

              <Link to="/pointStokez" className="nav-link">
                <i className="fa-solid fa-arrow-right-arrow-left nav-icon" />
                <p> Transfer Point</p>
              </Link>
            </li>
           
           
            <li className="nav-header">Game History</li>
            <li className="nav-item">
              <Link to="/PlayersHistrory" className="nav-link">
                <i className="fa-solid fa-lock nav-icon"></i>
                <p>Game History</p>
              </Link>
            </li>

                        <li className="nav-item">
                                <Link to="/ShowCurrentBet" className="nav-link">
                                    <i className="fa-solid fa-lock nav-icon"></i>
                                    <p>Show Current Bet</p>
                                </Link>
                            </li>
            <li className="nav-header">User Settings</li>
            <li className="nav-item">
              <Link to="/changepassword" className="nav-link">
                <i className="fa-solid fa-key nav-icon"></i>
                <p>Change Password</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ResetUserPassword" className="nav-link">
                <i className="fa-solid fa-key nav-icon"></i>
                <p>Change UserPassword</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
export default AppSideber;
