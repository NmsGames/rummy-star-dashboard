import React  from 'react'
import { Link } from "react-router-dom"
import { Button } from '@material-ui/core'
import '../../style/header.css'


function Header(){ 
    const logoutUser = async () =>{
        sessionStorage.removeItem("token");
        window.location.href='/';
    }
        return (
            <div className="header">
                {/* <!-- Navbar --> */}
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* Left navbar links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" data-widget="pushmenu" to="/" role="button"><i className="fas fa-bars" /></Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <Button size="small">    <Link to="/" className="nav-link"> Home</Link></Button>
                        </li>

                    </ul>
                    {/* Right navbar links */}
                    <ul className="navbar-nav ml-auto">
                        {/* Navbar Search */}
                        <li className="nav-item">
                            <Link className="nav-link" data-widget="navbar-search" to="#" role="button">
                                <i className="fas fa-search" />
                            </Link>
                            <div className="navbar-search-block">
                                <form className="form-inline">
                                    <div className="input-group input-group-sm">
                                        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                        <div className="input-group-append">
                                            <button className="btn btn-navbar" type="submit">
                                                <i className="fas fa-search" />
                                            </button>
                                            <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                                <i className="fas fa-times" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link" data-widget="fullscreen" to="#" role="button">
                                <i className="fas fa-expand-arrows-alt" />
                            </Link>
                        </li> 

                        <li className="nav-item dropdown"> 
                            <Link className="nav-link"   onClick={() => logoutUser()} data-toggle="dropdown" to="/"> 
                                <span > <i className="fas fa-sign-out-alt"></i> Logout</span>
                            </Link> 
                        </li>
                    </ul>

                </nav>

            </div>
        )  
}
export default Header;