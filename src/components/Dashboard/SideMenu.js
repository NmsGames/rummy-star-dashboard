import React from 'react'
import { Link } from "react-router-dom"
 
const SideMenu = () => { 
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4"> 
                <div className="sidebar"> 
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex"> 
                        <p className='text-white mx-4'>Admin</p>
                    </div>
                    <div className="form-inline">
                    </div> 
                    <nav className="mt-2">
                        <ul
                            className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <img style={{width:"10px",height:"10px"}} src='https://static.vecteezy.com/system/resources/previews/000/439/863/large_2x/vector-users-icon.jpg'/> 
                                    <p> Dashboard
                                    </p>
                                </Link>
                            </li> 

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
                            <li className="nav-item">
                                <Link to="/SendPointsToDistributor" className="nav-link">
                                    <i className="fa-solid fa-arrow-right-arrow-left nav-icon" />
                                    <p> Send Points To Agents</p>
                                </Link>
                            </li> 
                            <li className="nav-item">
                                <Link to="/TurnOverReport" className="nav-link">
                                    <i className="fa-regular fa-clipboard nav-icon"></i>
                                    <p>Turn Over</p>
                                </Link>
                            </li>
                           
                              <li className="nav-item">
                                <Link to="/PlayersHistrory" className="nav-link">
                                    <i className="fa-solid fa-lock nav-icon"></i>
                                    <p>Players History</p>
                                </Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link to="/GamePlayHistory" className="nav-link">
                                    <i className="fa-solid fa-comments-dollar nav-icon"></i>
                                    <p>Game Play History</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/PoitsReportHistory" className="nav-link">
                                    <i className="fa-solid fa-comments-dollar nav-icon"></i>
                                    <p>Transactions Report</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ShowCurrentBet" className="nav-link">
                                    <i className="fa-solid fa-lock nav-icon"></i>
                                    <p>Show Current Bet</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/changepassword" className="nav-link">
                                    <i className="fa-solid fa-key nav-icon"></i>
                                    <p>Change Password</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/updatedUserPassword" className="nav-link">
                                    <i className="fa-solid fa-key nav-icon"></i>
                                    <p>Change UserPassword</p>
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/resetIdPassword" className="nav-link">
                                    <i className="fa-solid fa-lock nav-icon"></i>
                                    <p>Reset Users Password</p>
                                </Link>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    )
}
export default SideMenu
