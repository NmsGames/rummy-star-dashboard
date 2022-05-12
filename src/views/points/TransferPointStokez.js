import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import "../../style/Contact.css";
import axios from "axios";
 
import Swal from "sweetalert2";


function TransferPointStokez() 
{
    let apiBaseURL = "http://localhost:5000";
  
    const [destriData, setDestriData] = useState([]);
    const [values, setValues] = useState({
      stokez_id: 0,
      points: 0,
      passcode: "1234",
    });
   
    const TokenData = JSON.parse(sessionStorage.getItem("token"));
    const handleSubmit = async (e) => {
      e.preventDefault();
      const { stokez_id, points, passcode } = values;
      const data = { stokez_id, points, pin: passcode };
      await fetch(`${apiBaseURL}/api/users/sendStokezPoints`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TokenData.token}`,
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) { 
            setValues({
              stokez_id: 0,
              points: 0,
              
            });
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Points transfered",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            if (data.status == 401) {
              sessionStorage.removeItem("token");
              window.location.reload();
            } else {
              Swal.fire({
                position: "top-end",
                icon: "warning",
                title: "Oops...",
                text: `${data.message} !`,
                showConfirmButton: false,
                timer: 1700,
              });
            }
          }
        })
        .catch((error) => {
          Swal.fire(`Something Went wrong!`, "error");
        });
    };
  
    //get Agents
    const getAgents = async () => {
      await axios
        .get(`${apiBaseURL}/api/users/getStokez`)
        .then(function (response) {
          if (response.data.status === 200) {
            setDestriData(response.data.data);
          }
        })
        .catch(function (error) {
          Swal.fire(`Something Went wrong!`, "error");
        });
    };
  
    const handleChange = (name) => (e) => {
      setValues({ ...values, [name]: e.target.value });
    };
    useEffect(() => {
      getAgents();
    }, []);
  
    return (
        <div>
        <div className='borders'>
        <ul className="nav nav-tabs">
          
       <li className="nav-item">
             
             <Link className="nav-link " to="/pointStokez"> Stokez </Link>
</li>
          <li className="nav-item ml-3">
                         <Link className="nav-link" to="/pointAgent" >  Agent </Link>
          </li>
          <li className="nav-item ml-3">
           
             <Link className="nav-link " to="/pointPlayer"> Player </Link>
          </li>
         </ul>  
</div>
          <div className="row">
            <div className="col-md-8">
              <div className="card card-outline card-warning">
                <div className="card-header">
                  <h3 className="card-title">
                    <i className="fa-solid fa-arrow-right-arrow-left fa-1x" />
                    Transfer Point Stokez
                  </h3>
                </div>
                <div className="card-body">
                  <form method="post" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="username">Username *</label>
                          <select
                            name="distributor_id"
                            
                            onChange={handleChange("stokez_id")}
                            className="inputfield form-control"
                            placeholder="Username*"
                          >
                            <option value="">Select User</option>
                            {destriData.map((item, index) => {
                              return (
                                <option value={item.id} key={index}>
                                  {item.username}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="username">Amount To Transfer *</label>
                          <input
                            type="number"
                            value={values.points}
                            onChange={handleChange("points")}
                            name="points"
                            className="inputfield form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="dbalance">Balance *</label>
                          <input
                            type="text"
                            disabled
                            value={values.points}
                            className="inputfield form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="passcode">Pass Code</label>
                          <input
                            type="password"
                            name="passcode"
                            value={values.passcode}
                            onChange={handleChange("passcode")}
                            className="inputfield form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group row">
                          <div className="col-sm-9">
                            <div className="form-group row">
                                                            <div className="col-sm-4 ">
                                <button
                                  type="onSubmit"
                                  className="inputfield btn-success form-control"
                                >
                                  Send
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          </div>
    );
  }
  
export default TransferPointStokez